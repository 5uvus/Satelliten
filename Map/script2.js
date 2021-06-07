require(["esri/Map", "esri/views/SceneView", "esri/widgets/Search"], function(Map, SceneView, Search) {
  var map = new Map({
    basemap: "satellite",
    ground: "world-elevation"
  });

  var view = new SceneView({
    scale: 123456789,
    container: "viewDiv",
    map: map
  });

  var searchWidget = new Search({
    view: view
  });

  // Add the search widget to the top right corner of the view
  view.ui.add(searchWidget, {
    position: "top-right"
  });
});