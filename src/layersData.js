// Base maps
var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {});
var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {});
var Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});

// Base links of the layers
var smartlagoonLink = 'https://carto.vielca.com/geoserver/Smartlagoon/wms?';
var marManorLink = 'https://carto.vielca.com/geoserver/mar_menor/wms?';
var link = smartlagoonLink;

// Create layers
var allLayersString = new Array(
    "SIAM_weather_stations",
    "Environmental_zoning_for_renewable_energy",
    "Flora_recovery_plan",
    "Macrophytes",
    "Marine_habitats",
    "Natura_2000_Network_LIC_ZEC",
    "Natura_2000_Network_ZEPA",
    "Natural_protected_areas",
    "RAMSAR",
    "Temporary_exclusion_area",
    "Terrestrial_habitats",
    "ZEPIM",
    "Zone_0",
    "Zone_A1",
    "Zone_A2",
    "Zone_B",
    "Zones",
    "Anchoring",
    "Fartet_recovery_plan",
    "Fishing_company_zones",
    "Sailing_speed",
    "Flow_accumulation",
    "Flow_direction",
    "Mar_Menor_catchment_area",
    "Irrigated_crops",
    "SIOSE_Land_cover",
    "SIOSE_Land_uses",
    "Selected_areas_for_the_implementation_of_thermo_solar_plants",
    "Corine_Land_Cover",
    "Declaration_of_Urgent_Measures",
    "Municipalities",
    "Regions",
    "Bathymetry",
    "DEM",
    "Relief",
    "Soil_regional_layer",
    "Declaracion_Riesgo_Cuantitativo",
    "Declaracion_Riesgo_Quimico",
    "Declaration_of_at_risk_of_not_achieving_good_quantitative_or_chemical_status",
    "National_census_dischrages",
    "Surface_water_quality",
    "CHL"
);


var map = L.map('map', { 
    center: [37.75, -1],
    zoom: 10,
    minZoom: 2,
    zoomControl: false,
    layers: [Satellite]
});

editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

let options = {
    position: 'topleft',
    draw: {
        circle: true, 
        rectangle: true,
        marker: true
    },
    edit: {
        featureGroup: editableLayers, //REQUIRED!! 
        remove: true
    }
};
let drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

//register events
map.on(L.Draw.Event.CREATED, function(e){
    editableLayers.addLayer(e.layer);
});

var j = 300;
for (let i = 0; i < allLayersString.length; i++) {
    map.createPane(allLayersString[i]);
    map.getPane(allLayersString[i]).style.zIndex = j;
    j--;
}

var allLayers = new Array();
for(let r = 0; r < allLayersString.length; r++) {
    if (allLayersString[r] == "Marine_habitats" || allLayersString[r] == "National_census_dischrages") {
        allLayers[r] = allLayersString[r];
    }
    else allLayers[r] = allLayersString[r].replace(/_/g, " ");
}

for(var i = 0; i < allLayersString.length; i++) {
    if (allLayersString[i] == "CHL" || allLayersString[i] == "Corine_Land_Cover") link = marManorLink;
    else link = smartlagoonLink;
    window[allLayersString[i]] = L.tileLayer.betterWms(link, {
        layers: allLayers[i],
        format: 'image/png',
        transparent: true,
        pane: allLayersString[i],
    });
}