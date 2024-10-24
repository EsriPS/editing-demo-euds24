// #region Imports

// Map Components
import '@arcgis/map-components/dist/components/arcgis-map';
import '@arcgis/map-components/dist/components/arcgis-legend';
import '@arcgis/map-components/dist/components/arcgis-search';
import '@arcgis/map-components/dist/components/arcgis-editor';
import '@arcgis/map-components/dist/components/arcgis-expand';
import '@arcgis/map-components/dist/components/arcgis-zoom';
import '@arcgis/map-components/dist/components/arcgis-basemap-toggle';

// Core
import FeatureTable from '@arcgis/core/widgets/FeatureTable.js';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils.js';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine.js';

import { setAssetPath } from '@esri/calcite-components/dist/components';

setAssetPath(location.href);
// #endregion Imports

// Obtain the Map and Editor components
const arcgisMap = document.querySelector('arcgis-map');
const editor = document.querySelector('arcgis-editor');
const filterNeedsReview = document.getElementById('filter-review');
const stepper = document.querySelector('calcite-stepper');

console.log(stepper);

arcgisMap.addEventListener('arcgisViewReadyChange', async (event) => {
  // Find the inspection zones layer and set it in the global context

  await reactiveUtils.whenOnce(() => !arcgisMap.view.updating);

  const buildingsLayer = arcgisMap.map.layers.find((layer) => {
    return layer.title === 'Buildings';
  });

  const buildingsLayerView = await arcgisMap.view.whenLayerView(buildingsLayer);
  console.log(buildingsLayerView);
  await reactiveUtils.whenOnce(() => buildingsLayer.loaded);

  // Initialize FeatureTable
  const featureTable = new FeatureTable({
    container: document.getElementById('panel-table'),
    view: arcgisMap.view,
    layer: buildingsLayer,
    relatedRecordsEnabled: true,

    actionColumnConfig: {
      label: 'Go to feature',
      icon: 'zoom-to-object',
      callback: (params) => {
        // Todo: figure out why feature.geometry is null here...
        // view.goTo(params.feature.geometry.extent.expand(1.5));

        view.goTo(params.feature);
      },
    },

    tableTemplate: {
      columnTemplates: [
        {
          type: 'field',
          fieldName: 'UID',
          label: 'ID',
          flexGrow: 0,
          width: '170px',
        },
        {
          type: 'field',
          fieldName: 'STATUS',
          label: 'Permit Status',
        },
        {
          type: 'field',
          fieldName: 'BEZGFK',
          label: 'Building Type',
        },
        {
          type: 'field',
          fieldName: 'NAMLAG',
          label: 'Address',
        },
      ],
    },
  });

  window.subTableTemplate = {
    columnTemplates: [
      {
        type: 'field',
        fieldName: 'P_UID',
        label: 'Permit ID',
      },
      {
        type: 'field',
        fieldName: 'STATUS',
        label: 'Status',
      },
    ],
  };

  window.subActionColumnConfig = {
    label: 'Edit Record',
    icon: 'pencil',
    callback: (params) => {
      console.log(params);
      editor.classList.remove('hidden');
      editor.startUpdateWorkflowAtFeatureEdit(params.feature);
      stepper.goToStep(2);
    },
  };

  reactiveUtils.when(
    () => featureTable.relatedTable,
    (relatedTable) => {
      console.log('Related Table Loaded');
      // relatedTable.tableTemplate = window.subTableTemplate;
      relatedTable.actionColumnConfig = window.subActionColumnConfig;
      relatedTable.relatedRecordsEnabled = false;
    }
  );

  window.buildingsLayer = buildingsLayer;
  window.buildingsLayerView = buildingsLayerView;
  window.featureTable = featureTable;
  window.editor = editor;
  window.map = arcgisMap;
  window.view = arcgisMap.view;
});

filterNeedsReview.addEventListener('click', () => {
  const query = buildingsLayer.createQuery();
  query.where = "STATUS = 'Needs Review'";

  buildingsLayer
    .queryFeatures(query)
    .then((results) => {
      console.log({ results });

      const features = results.features;
      if (features.length > 0) {
        // Todo: Better for the demo to set objectIds or highlightIds?
        // featureTable.highlightIds.removeAll();
        // featureTable.highlightIds.addMany(
        //   features.map((feature) => feature.attributes.OBJECTID)
        // );

        // Filter the table by features with STATUS = Needs Review
        featureTable.objectIds = features.map(
          (feature) => feature.attributes.OBJECTID
        );

        const unionedGeometries = geometryEngine.union(
          features.map((feature) => feature.geometry)
        );

        arcgisMap.view.goTo(unionedGeometries.extent.expand(1.5));
      } else {
        console.log('No features found with STATUS = Needs Review');
      }
    })
    .catch((error) => {
      console.error('Error querying features:', error);
    });
});
