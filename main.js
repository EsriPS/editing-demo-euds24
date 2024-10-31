// #region Imports

// Map Components
import '@arcgis/map-components/dist/components/arcgis-map';
import '@arcgis/map-components/dist/components/arcgis-editor';
import '@arcgis/map-components/dist/components/arcgis-feature-table';
import '@arcgis/map-components/dist/components/arcgis-legend';
import '@arcgis/map-components/dist/components/arcgis-search';
import '@arcgis/map-components/dist/components/arcgis-expand';
import '@arcgis/map-components/dist/components/arcgis-zoom';
import '@arcgis/map-components/dist/components/arcgis-basemap-toggle';

// Core
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils.js';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine.js';

import { setAssetPath } from '@esri/calcite-components/dist/components';

setAssetPath(location.href);
// #endregion Imports

// Obtain the Map, Editor, and FeatureTable components
const arcgisMap = document.querySelector('arcgis-map');
const editor = document.querySelector('arcgis-editor');
const table = document.querySelector('arcgis-feature-table');
// const stepper = document.querySelector('calcite-stepper');

// Custom workflow handles
const filterNeedsReview = document.getElementById('filter-review');

arcgisMap.addEventListener('arcgisViewReadyChange', async (event) => {
  await reactiveUtils.whenOnce(() => !arcgisMap.view.updating);

  const buildingsLayer = arcgisMap.map.layers.find((layer) => {
    return layer.title === 'Buildings';
  });

  await reactiveUtils.whenOnce(() => buildingsLayer.loaded);

  // Initialize FeatureTable Component
  table.view = arcgisMap.view;
  table.layer = buildingsLayer;
  table.actionColumnConfig = {
    label: 'Go to feature',
    icon: 'zoom-to-object',
    callback: (params) => {
      view.goTo(params.feature.geometry.extent.expand(1.5));
    },
  };
  table.tableTemplate = {
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
    ],
  };

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
      editor.classList.remove('hidden');
      editor.startUpdateWorkflowAtFeatureEdit(params.feature);
      // stepper.goToStep(2);
    },
  };

  // Configure "permits" related table
  reactiveUtils.when(
    () => table.relatedTable,
    (relatedTable) => {
      console.log('Related Table Loaded');
      relatedTable.tableTemplate = window.subTableTemplate;
      relatedTable.actionColumnConfig = window.subActionColumnConfig;
      relatedTable.relatedRecordsEnabled = false;
    }
  );

  // Stash these in the window for now
  window.buildingsLayer = buildingsLayer;
  window.featureTable = table;
  window.editor = editor;
  window.map = arcgisMap;
  window.view = arcgisMap.view;
});

// #region Custom workflow steps
filterNeedsReview.addEventListener('click', () => {
  const query = buildingsLayer.createQuery();
  query.where = "STATUS = 'Needs Review'";

  buildingsLayer
    .queryFeatures(query)
    .then((results) => {
      console.log({ results });

      const features = results.features;
      if (features.length > 0) {
        // Highlight the features where Permit Status is Needs Review
        featureTable.highlightIds.removeAll();
        featureTable.highlightIds.addMany(
          features.map((feature) => feature.attributes.OBJECTID)
        );

        // Filter the table by features with STATUS = Needs Review
        featureTable.objectIds = features.map(
          (feature) => feature.attributes.OBJECTID
        );

        // Add filter-by-selection-enabled to the table element
        featureTable.filterBySelectionEnabled = true;

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
// #endregion Custom workflow steps
