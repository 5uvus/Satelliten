require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/widgets/Search",
    "dojo/dom", 
    "dojo/on",
    "dojo/domReady!",
    "esri/tasks/Locator",
    "esri/Graphic"   ], function(Map, SceneView, Search) {
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
  map.on("load", function() {
    //after map loads, connect to listen to mouse move & drag events
    map.on("mouse-move", showCoordinates);
    map.on("mouse-drag", showCoordinates);
  });

  function showCoordinates(evt) {
    //the map is in web mercator but display coordinates in geographic (lat, long)
    var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
    //display mouse coordinates
    dom.byId("info").innerHTML = mp.x.toFixed(3) + ", " + mp.y.toFixed(3);
    console.log(mp.x.toFixed(3) + ", " + mp.y.toFixed(3));
  }
});