var http = require('http');
const fetch = require('node-fetch');
const api_key = '7dc22efcaa6595c58a6b1e6e60bc347c0faeae0fa49992e20a9d20340fce1bb8';
const bbox = '19.59,49.90,20.33,50.21';
const satellites = 'Sentinel-2A,Sentinel-2B';
const url = `https://api.spectator.earth/overpass/?api_key=${api_key}&bbox=${bbox}&satellites=${satellites}`;

//Gibt die Sachen in der CMD Aus


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  document.getElementById("demo").innerHTML = data;
  console.log(data);
});
  res.end();
}).listen(8080);