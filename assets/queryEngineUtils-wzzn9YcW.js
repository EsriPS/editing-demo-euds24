import{d,e as a,g as i,h as g}from"./Editor-BZKF0HZM.js";import{r as c}from"./VertexSnappingCandidate-CbF2FeQ4.js";function t({x:e,y:r,z:n}){return g(e,r,n??0)}function p(e,r){switch(e.type){case"edge":return e.draped?new a({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:d(t(e.target)),objectId:e.objectId,getGroundElevation:r}):new i({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:d(t(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new c({targetPoint:d(t(e.target)),objectId:e.objectId,isDraped:!1})}}function l(e,r){return e!=null&&e.type==="3d"?(n,o)=>e.elevationProvider.getElevation(n,o,0,r,"ground"):()=>null}export{l as i,p as o};