var XMLHttpRequest = require("C:\\Users\\fabst\\OneDrive - HTL Anichstrasse (1)\\HTL Anichstraße\\3AHW_Projekt\\Financial-Application-1\\node_modules\\xmlhttprequest").XMLHttpRequest;
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
 

  