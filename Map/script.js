
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/layers/FeatureLayer"

], function(esriConfig,Map, MapView, Search, FeatureLayer) {

esriConfig.apiKey = "AAPK8f51c7ada42f45f3a312772b619297a0GX-8LymtaW78Crkz_fE6f5Pst5hdHATvlIGf86z0flzOmxp_QAobGzacz_CMP0HT";

const map = new Map({
  basemap: "dark-gray"
});

const view = new MapView({
  container: "viewDiv",
 map: map,
   center: [-118.80543,34.02700],
  zoom: 3
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
const trailheadsLayer = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
});

});