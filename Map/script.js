
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/layers/FeatureLayer",
  "esri/tasks/locator"


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

const searchWidget = new Search({
  view: view,
  allPlaceholder: "District or Senator",
  includeDefaultSources: false,
  sources: [
  
    {
      name: "ArcGIS World Geocoding Service",
      placeholder: "example: Nuuk, GRL",
      apiKey: "AAPKd6517aa887304b5891f6b959ea426015CLWBA2qIMPI4-vgwnS0B8RGRBVMArpJu0IN2BUL-G6GZ_aa8NF-r_JvSnsWp_A2M",
      singleLineFieldName: "SingleLine",
      locator: new Locator({
        url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
      })
    }
  ]
});
view.ui.add(searchWidget, {
  position: "top-right",
  index: 2
});

});