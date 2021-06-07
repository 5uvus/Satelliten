
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/layers/FeatureLayer",
  "esri/tasks/locator"


], function(esriConfig,Map, MapView, Search, FeatureLayer) {

esriConfig.apiKey = "AAPK8f51c7ada42f45f3a312772b619297a0GX-8LymtaW78Crkz_fE6f5Pst5hdHATvlIGf86z0flzOmxp_QAobGzacz_CMP0HT";

const map = new Map({
  basemap: "dark-gray"
});

const view = new SceneView({
  container: "viewDiv",
  map: map,
  camera: {
    position: {
      x: -118.808, //Longitude
      y: 33.961, //Latitude
      z: 600000 // Meters
    },
    tilt: 45
  }
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
const trailheadsLayer = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
});

});