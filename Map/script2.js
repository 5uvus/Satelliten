require([
    "esri/config",
    "esri/Map", 
    "esri/views/SceneView"
], function(esriConfig,Map, SceneView) {
  
  esriConfig.apiKey = "YOUR-API-KEY";
  
  var map = new Map({
    basemap: "dark-gray", //Basemap layer service
    ground: "world-elevation" //Elevation service
  });

  var view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: {
        x: -118.808, //Longitude
        y: 33.961, //Latitude
        z: 600000 // Meters
      },
      tilt: 45
    }
  });
  
});