import{cu as a}from"./index-C1aGfQcb.js";import{f as n}from"./utils-DGPHbhMN.js";import{d as e}from"./queryTopFeatures-DY4tRdSx.js";import s from"./TopFeaturesQuery-CUWnEpja.js";import"./normalizeUtils-Bg1OALXh.js";import"./normalizeUtilsCommon-UUlRRPVA.js";import"./utils-ByvCMLXh.js";import"./query-c3x-72Af.js";import"./pbfQueryUtils-zIR8yi_m.js";import"./pbf-B3ECgi3E.js";import"./OptimizedGeometry-C9mSZhHi.js";import"./OptimizedFeature-swgcyHeh.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-D-ZT69l7.js";import"./projection-BOBOhWzm.js";import"./projectBuffer-CZ7yaGuo.js";import"./TimeExtent-DGiXUfis.js";import"./timeUtils-X0MXjtQ8.js";async function h(m,r,i){const p=n(m),o=await e(p,s.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:a.fromJSON(t)}}export{h as executeForTopExtents};