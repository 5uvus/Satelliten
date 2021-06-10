
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
  
  searchWidget.on('search-complete', function(result)
  {
     var searchResult = searchWidget.searchWidget;
      console.log(searchResult+"=search Result");
      document.getElementById("searchResult").innerHTML = "lol";
  });
  
  // Add the search widget to the top right corner of the view
  view.ui.add(searchWidget, {
    position: "top-right"
  });
/*   map.on("load", function() {
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


  const route = {
    type: "line-3d",
    symbolLayers: [
      {
        type: "line",
        size: "10px",
        material: {
          color: white
        }
      },
      {
        type: "line",
        size: "3px",
        material: {
          color: blue
        }
      }
    ]
  };
  // remove the reference to the container for the previous view
  appConfig.activeView.container = null;
  const sketchVM = new SketchViewModel({
    layer: gLayer,
    view: view,
    polygonSymbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 10, // extrude by 10 meters
          material: {
            color: white
          },
          edges: {
            type: "solid",
            size: "3px",
            color: [82, 82, 122, 0.8]
          }
        }
      ]
    },
    defaultCreateOptions: { hasZ: false }
  });
  button.addEventListener("click", function (event) {
    sketchVM.create("polygon");
  }); */
});