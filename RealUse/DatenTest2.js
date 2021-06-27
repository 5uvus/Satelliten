var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
 export {satelite_loc};
  request.send();
 

  