var http = require('http');
const fetch = require('node-fetch');
const api_key = '7dc22efcaa6595c58a6b1e6e60bc347c0faeae0fa49992e20a9d20340fce1bb8';
const bbox = '19.59,49.90,20.33,50.21';
const satellites = 'Sentinel-2A,Sentinel-2B';
const satellite_id = 1;
const url = `https://api.spectator.earth/satellite/${satellite_id}`;

//Gibt die Sachen in der CMD Aus


const port = 8080;
const hostname = "127.0.0.1";
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
 
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


var jsonOutput;
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(JSON.stringify(data));
  console.log(data.geometry);
  
  //Da Julian isch der beste
});



//WORLD-MAP------------------------------------------------------------------------------------
require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/widgets/Search",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"   ], function(Map, SceneView, Search, GraphicsLayer, Graphic) {
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

  //Layer für Punkte
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  const point = { //Create a point
    type: "point",
    longitude: 0,
    latitude: -0
 };
 
 const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [226, 119, 40],  // Orange
  outline: {
      color: [255, 255, 255], // White
      width: 1000
  }
};
 const pointGraphic = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol
});
graphicsLayer.add(pointGraphic);
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