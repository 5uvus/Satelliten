

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
  zoom: 5, // Zoom level
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
map.add(graphicsLayer);

const polyline = {
  type: "polyline",
  paths: [
    [ 179.70918921447554, -2.11191732981298 ],
    [ 178.93736417788574, -5.720427290745072 ],
    [ 178.15899582007108, -9.327903972121788 ],
    [ 177.36964451807106, -12.93402358028779 ],
    [ 176.56455646022332, -16.538437348708577 ],
    [ 175.73839043859692, -20.140761079243344 ],
    [ 174.88510856596557, -23.7405576397852 ],
    [ 173.99759378521412, -27.337319888788286 ],
    [ 173.06739032215006, -30.93044335451104 ],
    [ 172.0841436099917, -34.51918866897582 ],
    [ 171.03495825158606, -38.10263375664467 ],
    [ 169.90342813254674, -41.67959699479118 ],
    [ 168.66825672304162, -45.248548421041264 ],
    [ 167.30115337952856, -48.80743556354933 ],
    [ 165.763650476602, -52.35344779947193 ],
    [ 164.00199442549396, -55.88262703418503 ],
    [ 161.93885382442159, -59.38922566350206 ],
    [ 159.4591399858701, -62.86455568679878 ],
    [ 156.38483085931236, -66.29494989554598 ],
    [ 152.4284574429608, -69.65777304283425 ],
    [ 147.10429766417917, -72.9131846352349 ],
    [ 139.5602854240084, -75.98622334660703 ],
    [ 128.3097344269468, -78.72687090202051 ],
    [ 111.2012375372779, -80.83211278913686 ],
    [ 87.53877115782075, -81.79725949999467 ],
    [ 62.734160545354065, -81.23714300691861 ],
    [ 43.69781885678698, -79.39062868556235 ],
    [ 31.053489212408824, -76.78639366825237 ],
    [ 22.667304402291713, -73.78544077338054 ],
    [ 16.83604064367708, -70.57067563673064 ],
    [ 12.561686916741944, -67.23240701950857 ],
    [ 9.278554147821154, -63.81777005717659 ],
    [ 6.655798218803047, -60.35306097803924 ],
    [ 4.491078190620579, -56.853907254917516 ],
    [ 2.655070407755084, -53.33011362436498 ],
    [ 1.061765499639764, -49.78809363401225 ],
    [ -0.348078846502147, -46.23222543511733 ],
    [ -1.616546334313581, -42.6655860279013 ],
    [ -2.77436008849618, -39.09041571441192 ],
    [ -3.844508578125077, -35.508367400428334 ],
    [ -4.844585730171991, -31.92071150113617 ],
    [ -5.788344984304387, -28.328428148681326 ],
    [ -6.686762027631653, -24.73230964500752 ],
    [ -7.548774589569575, -21.132991197707558 ],
    [ -8.381816050369242, -17.53100556153671 ],
    [ -9.192204335012914, -13.926808651622066 ],
    [ -9.9854385995561, -10.320799180256433 ],
    [ -10.766427188691098, -6.713334878597588 ],
    [ -11.53967375840189, -3.104747437707098 ],
    [ -12.30943095522045, 0.504647246165923 ],
    [ -13.079844703972975, 4.114537545640593 ],
    [ -13.85507885873224, 7.724610125788737 ],
    [ -14.639455221695565, 11.334536710643372 ],
    [ -15.437595269610112, 14.943967253009536 ],
    [ -16.254578101897433, 18.55251328587818 ],
    [ -17.096149615196797, 22.159742799784308 ],
    [ -17.968962413759805, 25.765150360729336 ],
    [ -18.880907073625103, 29.368143449802762 ],
    [ -19.841539029441545, 32.96800148204715 ],
    [ -20.86267109337867, 36.56385019324875 ],
    [ -21.95921869103649, 40.154576262572824 ],
    [ -23.150403682286715, 43.73874876538829 ],
    [ -24.46153362555153, 47.314492814767945 ],
    [ -25.92672873082974, 50.87927099543515 ],
    [ -27.593161699624037, 54.42956917506193 ],
    [ -29.52796304619189, 57.96035691932456 ],
    [ -31.82978802290496, 61.46418932202774 ],
    [ -34.64905788585445, 64.92953360875791 ],
    [ -38.22490097297707, 68.33771604232423 ],
    [ -42.955069935493945, 71.656648394006 ],
    [ -49.53036669096558, 74.82742711240101 ],
    [ -59.17375368575567, 77.73442392505014 ],
    [ -73.87111183614002, 80.14128013572508 ],
    [ -95.41088519515144, 81.60600737304514 ],
    [ -120.90798136680904, 81.61908718530572 ],
    [ -142.55765929975513, 80.17473440227981 ],
    [ -157.35817379717417, 77.77927777732961 ],
    [ -167.06687789099712, 74.87823688963674 ],
    [ -173.68106915869737, 71.7107434922325 ],
    [ -178.43505840594466, 68.39379189541003 ],
    
  ]
};
const simpleLineSymbol = {
  type: "simple-line",
  color: [156, 181, 162], // Orange
  width: 100
};

const polylineGraphic = new Graphic({
  geometry: polyline,
  symbol: simpleLineSymbol
});
graphicsLayer.add(polylineGraphic);


//Sateliten-Position----------------------------------

  const point = { //Create a point
    type: "point",
    longitude: 161.85181983623056,
    latitude: -59.51120418679174,
 };
 
 const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [156, 181, 162],  // Orange
  outline: {
      color: [82, 94, 85], // White
      width: 6
  }
};
 const pointGraphic = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol
});
//console.log(pointGraphic);
graphicsLayer.add(pointGraphic);


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

var request = new XMLHttpRequest();
const satellite_id = 1;

function reqListener () {                     //Gibt die API-Calls aus in der Konsole
    //console.log(request.responseText);
  }
  

  var satelite_loc;
  request.addEventListener("load", reqListener);
  request.open("GET", `https://api.spectator.earth/satellite/${satellite_id}`);
  request.onload  = function() {
    var jsonResponse = JSON.parse(request.responseText);;
    console.log(jsonResponse.geometry);
    satelite_loc = jsonResponse.geometry;
    
    // do something with jsonResponse
 };
  request.send();