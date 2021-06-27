require(["esri/Map", "esri/views/SceneView", "esri/layers/GraphicsLayer", "esri/Graphic"], (
    Map,
    SceneView,
    GraphicsLayer,
    Graphic
  ) => {
    var map = new Map({
        basemap: "satellite",
        ground: "world-elevation"
      });
    
     var view = new SceneView({
        scale: 123456789,
        container: "viewDiv",
        map: map
      });
      
  });