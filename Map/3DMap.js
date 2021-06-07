// Fix line

esriConfig.apiKey = "YOUR_API_KEY";
const scene = new Map({
  basemap: "arcgis-topographic", // Basemap layer
  ground: "world-elevation" // Elevation service
});


const view = new SceneView({
  map: scene,
  camera: {
    position: {
      x: -118.808,
      y: 33.961,
      z: 2000 // meters
    },
    tilt: 75
  },
  container: "viewDiv"
});
 