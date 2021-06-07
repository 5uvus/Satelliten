require([
    "esri/config",
    "esri/Map", 
    "esri/views/SceneView"
], function(esriConfig,Map, SceneView) {
  
  esriConfig.apiKey = "AAPK8f51c7ada42f45f3a312772b619297a0GX-8LymtaW78Crkz_fE6f5Pst5hdHATvlIGf86z0flzOmxp_QAobGzacz_CMP0HT";
  
  var map = new Map({
    basemap: "arcgis-imagery", //Basemap layer service
    ground: "world-elevation" //Elevation service
  });

  var view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: {
        x: -118.808, //Longitude
        y: 33.961, //Latitude
        z: 600000,
      },
      tilt: 45
    }
  });
  
});