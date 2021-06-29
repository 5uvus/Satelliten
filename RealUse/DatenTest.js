
const http = require('http');
const fetch = require('node-fetch');
const api_key = '7dc22efcaa6595c58a6b1e6e60bc347c0faeae0fa49992e20a9d20340fce1bb8';
const bbox = '19.59,49.90,20.33,50.21';
const satellites = 'Sentinel-2A,Sentinel-2B';
const satellite_id = 10;
const url_current_info = `https://api.spectator.earth/satellite/${satellite_id}`;
const url_tracking = `https://api.spectator.earth/satellite/${satellite_id}/trajectory`;
const url_images =  `http://localhost/imagery/1/files/?api_key=${api_key}`;


//Gibt die Sachen in der CMD Aus


const port = 8080;
const hostname = "127.0.0.1";
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
 
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


fetch(url_current_info).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(JSON.stringify(data));
  console.log("----Satellite Name----")
  console.log(data.properties.name);
  console.log("------------------------");
});
 var jsonOutput = "lol";
fetch(url_current_info).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(JSON.stringify(data));
  console.log("----Current Saatelite Position----")
  console.log(data.geometry.coordinates);
  console.log(data.geometry.coordinates[0]);
  console.log(data.geometry.coordinates[1]);
  jsonOutput = data.geometry.coordinates;
  console.log("------------------------");
});


fetch(url_tracking).then(function(response) {
  return response.json();
}).then(function(data) {
  //console.log(JSON.stringify(data));
  console.log("----Satelite Orbit Data----")
  console.log(data.geometry.coordinates);
  //console.log(data);
  console.log("-------------------")
});

