import{o as u}from"./projection-BOBOhWzm.js";function i(o,f,e){if(!(e!=null&&e.features)||!e.hasZ)return;const t=u(e.geometryType,f,o.outSpatialReference);if(t!=null)for(const n of e.features)t(n.geometry)}export{i as t};