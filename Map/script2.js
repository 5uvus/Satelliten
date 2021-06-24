

//WORLD-MAP------------------------------------------------------------------------------------
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Search",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"   ], function(Map, MapView, Search, GraphicsLayer, Graphic) {
  var map = new Map({
    basemap: "dark-gray",

  });

 var view = new MapView({
  map: map,
  autoResize: true,
  center: [	16.363449, 	48.210033], // Longitude, latitude
  zoom: 13, // Zoom level
  container: "viewDiv" // Div element
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

  //Layer für Punkte
const graphicsLayer = new GraphicsLayer();

  const point = { //Create a point
    type: "point",
    longitude: 0,
    latitude: 0,
 };
 
 const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [226, 119, 40],  // Orange
  outline: {
      color: [255, 255, 255], // White
      width: 1
  }
};
 const pointGraphic = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol
});
//console.log(pointGraphic);

const polyline = {
  type: "polyline",
  paths: [
      [-118.821527826096, 34.0139576938577], //Longitude, latitude
      [-118.814893761649, 34.0080602407843], //Longitude, latitude
      [-118.808878330345, 34.0016642996246]  //Longitude, latitude
  ]
};
const simpleLineSymbol = {
  type: "simple-line",
  color: [226, 119, 40], // Orange
  width: 2
};

const polylineGraphic = new Graphic({
  geometry: polyline,
  symbol: simpleLineSymbol
});
graphicsLayer.add(polylineGraphic);
/*     DRAW ORBIT ROUTE FOR 3D-Map 
let point1;
let pointGraphic1;
let simpleMarkerSymbol1;
graphicsLayer.add(pointGraphic);

var orbit = [162.1127914218251,-81.2728580660886,200,300];
for(var i = 0; i<orbit.length; i+=2){
  var lat = orbit[i];
  var long = orbit[i+1];
  console.log("Lat: " + lat + "    Long:" + long);
  simpleMarkerSymbol1 = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1000
    }
  };
  point1 = { //Create a point
    type: "point",
    longitude: long,
    latitude: lat
 };
 console.log(point1);

  pointGraphic1 = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol
});
console.log(pointGraphic1);

graphicsLayer.add(pointGraphic1);  
}

map.add(graphicsLayer);
*/
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