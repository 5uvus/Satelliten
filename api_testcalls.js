const api_key = '7dc22efcaa6595c58a6b1e6e60bc347c0faeae0fa49992e20a9d20340fce1bb8';

const satellite_id = 1;
const url = `https://api.spectator.earth/satellite/${satellite_id}`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
