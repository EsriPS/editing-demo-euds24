let o;function u(){return o||(o=s()),o}class n{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1,this.supportsColorBufferFloat=!1,this.supportsColorBufferFloatBlend=!1,this.supportsColorBufferHalfFloat=!1}}function a(e){if(typeof WebGL2RenderingContext>"u")return null;const r=document.createElement("canvas");if(!r)return null;let t=r.getContext("webgl2",{failIfMajorPerformanceCaveat:!0});if(t==null&&(t=r.getContext("webgl2"),t!=null&&(e.majorPerformanceCaveat=!0)),t==null)return t;e.available=!0,e.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE),e.supportsVertexShaderSamplers=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const l=t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT);return l&&(e.supportsHighPrecisionFragment=l.precision>0),t}function s(){const e=new n,r=a(e);return r==null||(e.supportsColorBufferFloat=r.getExtension("EXT_color_buffer_float")!==null,e.supportsColorBufferFloatBlend=r.getExtension("EXT_float_blend")!==null,e.supportsColorBufferHalfFloat=e.supportsColorBufferFloat||r.getExtension("EXT_color_buffer_half_float")!==null),e}export{u as t};
