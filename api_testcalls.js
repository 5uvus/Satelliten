const api_key = '7dc22efcaa6595c58a6b1e6e60bc347c0faeae0fa49992e20a9d20340fce1bb8';
const bbox = '19.59,49.90,20.33,50.21';
const satellites = 'Sentinel-2A,Sentinel-2B';
const url = `https://api.spectator.earth/overpass/?api_key=${api_key}&bbox=${bbox}&satellites=${satellites}`;
  fetch(url).then(function(response) {
    return response.json();
    }).then(function(data) {
    console.log(data);
    });
    const satellite_id = 1;
    const url2 = `https://api.spectator.earth/satellite/${satellite_id}`;
    
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
