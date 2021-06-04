
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/layers/FeatureLayer"

], function(esriConfig,Map, MapView, Search, FeatureLayer) {

esriConfig.apiKey = "YOUR_API_KEY";

const map = new Map({
  basemap: "dark-gray"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [-118.80543,34.02700],
  zoom: 5
});
var searchWidget = new Search({
  view: view,
  sources: [{
    featureLayer: {
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CongressionalDistricts/FeatureServer/0",
    },
    searchFields: ["DISTRICTID"],
    displayField: "DISTRICTID",
    exactMatch: false,
    outFields: ["DISTRICTID", "NAME", "PARTY"],
    name: "Congressional Districts",
    placeholder: "example: 3708",
  }, {
   featureLayer: {
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_Senators/FeatureServer/0",
  },
    searchFields: ["Name", "Party"],
    suggestionTemplate: "{Name}, Party: {Party}",
    exactMatch: false,
    outFields: ["*"],
    name: "Senators",
  }]
});
view.ui.add(searchWidget, {
  position: "top-right",
  index: 2
});

});