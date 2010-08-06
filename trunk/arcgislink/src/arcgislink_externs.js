// this file contains externs that are not in default or gmaps v3 extern.
//  needed when compile for lib or with app together.

// includes:
//  --- some properties not in default.
//  --- json properties; so apps can use dot notation.
//  --- SR parameters
//  --- constructor object literals.
   

/** @type {object} */
CSSProperties.prototype.filters;
/** @type {number} */
CSSProperties.prototype.filters.alpha;

/** @type {object } */
var REST_JSON = {
  geometry: null,
  x: 0,
  y: 0,
  paths: null,
  points: null,
  rings: null,
  xmin: 0,
  ymin: 0,
  xmax: 0,
  ymax: 0,
  f: null,
  inSpatialReference: null,
  outSpatialReference: null,
  inSR: null,
  outSR: null,
  geometries: null,
  geometryType: null,
  geometry: null,
  spatialRelationship: null,
  spatialRel: null,
  outFields: null,
  objectIds: null,
  time: null,
  returnGeometry: false,
  returnIdsOnly: false,
  overlayOptions: null,
  bounds:null,
  bbox:null,
  size: null,
  dpi:0,
  imageSR:null,
  bboxSR:null,
  format: null,
  layerDefinitions: null,
  layerDefs: null,
  layerIds: null,
  layerOption: null,
  transparent:false,
  error: null,
  serviceDescription: null,
  mapName: null,
  description: null,
  copyrightText: null,
  layers: [{
    id: 0,
    name: null,
    defaultVisibility: true,
    parentLayerId: -1,
    subLayerIds: null
  }],
  tables: null,
  spatialReference: {
    wkid: 4326,
    wkt: null
  },
  singleFusedMapCache: true,
  tileInfo: {
    rows: 512,
    cols: 512,
    dpi: 96,
    format: null,
    compressionQuality: 75,
    origin: null,
    lods: [{
      level: 0,
      resolution: 0,
      scale: 0
    }]
  },
  initialExtent: null,
  fullExtent: null,
  units: null,
  supportedImageFormatTypes: null,
  documentInfo: {
    Title: null,
    Author: null,
    Comments: null,
    Subject: null,
    Category: null,
    Keywords: null
  },
  extent:null,
  bounds: null
};





