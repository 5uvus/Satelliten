require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",

  "esri/layers/FeatureLayer"

], function(esriConfig,Map, MapView, FeatureLayer) {

esriConfig.apiKey = "YOUR_API_KEY";

const map = new Map({
  basemap: "arcgis-topographic"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-118.80543,34.02700],
  zoom: 13
});

//Trailheads feature layer (points)
const trailheadsLayer = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
});
//Trails feature layer (lines)
const trailsLayer = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0"
});

map.add(trailheadsLayer);
map.add(trailsLayer, 0);
});