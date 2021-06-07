
console.log("lol");
const satellite_id = 1;
const url = `https://api.spectator.earth/satellite/${satellite_id}`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });