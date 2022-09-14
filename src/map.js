// Change the opacity of all active layers
multilayers = [
  Anchoring,
  Bathymetry,
  DEM,
  Environmental_zoning_for_renewable_energy,
  Declaracion_Riesgo_Cuantitativo,
  Declaracion_Riesgo_Quimico,
  Declaration_of_Urgent_Measures,
  Declaration_of_at_risk_of_not_achieving_good_quantitative_or_chemical_status,
  Fartet_recovery_plan,
  Fishing_company_zones,
  Flora_recovery_plan,
  Flow_accumulation,
  Flow_direction,
  Irrigated_crops,
  Macrophytes,
  Mar_Menor_catchment_area,
  Marine_habitats,
  Municipalities,
  National_census_dischrages,
  Natura_2000_Network_LIC_ZEC,
  Natura_2000_Network_ZEPA,
  Natural_protected_areas,
  RAMSAR,
  Regions,
  Relief,
  SIAM_weather_stations,
  SIOSE_Land_cover,
  SIOSE_Land_uses,
  Sailing_speed,
  Selected_areas_for_the_implementation_of_thermo_solar_plants,
  Soil_regional_layer,
  Surface_water_quality,
  Temporary_exclusion_area,
  Terrestrial_habitats,
  ZEPIM,
  Zone_0,
  Zone_A1,
  Zone_A2,
  Zone_B,
  Zones,
  CHL,
  Corine_Land_Cover
]

var layerGroup = L.layerGroup(multilayers);
var opacitySliderGroup = new L.Control.opacitySliderGroup();
map.addControl(opacitySliderGroup);
opacitySliderGroup.setOpacityLayerGroup(layerGroup);

// Add functionality plugins to the map
map.attributionControl.setPosition("bottomleft");

L.control.zoom({ position: 'topright' }).addTo(map);
var rulerControl = L.control.ruler().addTo(map);
L.Control.boxzoom({ position:'topright' }).addTo(map);
L.control.coordinates({ position:"bottomright" }).addTo(map);
new L.HistoryControl({}).addTo(map);

var baseMaps = {
    "Open Street Map": OpenStreetMap,
    "Gray": Esri_WorldGrayCanvas,
    "Satellite": Satellite
};

// Custom layer control
$('#street').click(function(){
  if ($('#street').is(':checked')){
    map.addLayer(OpenStreetMap);
    map.removeLayer(Esri_WorldGrayCanvas);
    map.removeLayer(Satellite);
  }
  else
    map.removeLayer(OpenStreetMap);
});

$('#gray').click(function(){
  if ($('#gray').is(':checked')){
    map.addLayer(Esri_WorldGrayCanvas);
    map.removeLayer(OpenStreetMap);
    map.removeLayer(Satellite);
  }
  else
    map.removeLayer(Esri_WorldGrayCanvas);
});

$('#satellite').click(function(){
  if ($('#satellite').is(':checked')){
    map.addLayer(Satellite);
    map.removeLayer(Esri_WorldGrayCanvas);
    map.removeLayer(OpenStreetMap);
  }
  else
    map.removeLayer(Satellite);
});

//--------------------------------------------------
$('#SIAM_weather_stations').click(function(){
  if ($('#SIAM_weather_stations').is(':checked')){
    map.addLayer(SIAM_weather_stations);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[0].addTo(map);
  }
  else {
    map.removeLayer(SIAM_weather_stations);
    legends[0].remove();
  }
});

$('#Environmental_zoning_for_renewable_energy').click(function(){
  if ($('#Environmental_zoning_for_renewable_energy').is(':checked')){
    map.addLayer(Environmental_zoning_for_renewable_energy);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[1].addTo(map);
  }
  else {
    map.removeLayer(Environmental_zoning_for_renewable_energy);
    legends[1].remove();
  }
});

$('#Flora_recovery_plan').click(function(){
  if ($('#Flora_recovery_plan').is(':checked')){
    map.addLayer(Flora_recovery_plan);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[2].addTo(map);
  }
  else {
    map.removeLayer(Flora_recovery_plan);
    legends[2].remove();
  }
});

$('#Macrophytes').click(function(){
  if ($('#Macrophytes').is(':checked')){
    map.addLayer(Macrophytes);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[3].addTo(map);
  }
  else {
    map.removeLayer(Macrophytes);
    legends[3].remove();
  }
});

$('#Marine_habitats').click(function(){
  if ($('#Marine_habitats').is(':checked')){
    map.addLayer(Marine_habitats);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[4].addTo(map);
  }
  else {
    map.removeLayer(Marine_habitats);
    legends[4].remove();
  }
});

$('#Natura_2000_Network_LIC_ZEC').click(function(){
  if ($('#Natura_2000_Network_LIC_ZEC').is(':checked')){
    map.addLayer(Natura_2000_Network_LIC_ZEC);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[5].addTo(map);
  }
  else {
    map.removeLayer(Natura_2000_Network_LIC_ZEC);
    legends[5].remove();
  }
});

$('#Natura_2000_Network_ZEPA').click(function(){
  if ($('#Natura_2000_Network_ZEPA').is(':checked')){
    map.addLayer(Natura_2000_Network_ZEPA);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[6].addTo(map);
  }
  else {
    map.removeLayer(Natura_2000_Network_ZEPA);
    legends[6].remove();
  }
});

$('#Natural_protected_areas').click(function(){
  if ($('#Natural_protected_areas').is(':checked')){
    map.addLayer(Natural_protected_areas);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[7].addTo(map);
  }
  else {
    map.removeLayer(Natural_protected_areas);
    legends[7].remove();
  }
});

$('#RAMSAR').click(function(){
  if ($('#RAMSAR').is(':checked')){
    map.addLayer(RAMSAR);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[8].addTo(map);
  }
  else {
    map.removeLayer(RAMSAR);
    legends[8].remove();
  }
});

$('#Temporary_exclusion_area').click(function(){
  if ($('#Temporary_exclusion_area').is(':checked')){
    map.addLayer(Temporary_exclusion_area);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[9].addTo(map);
  }
  else {
    map.removeLayer(Temporary_exclusion_area);
    legends[9].remove();
  }
});

$('#Terrestrial_habitats').click(function(){
  if ($('#Terrestrial_habitats').is(':checked')){
    map.addLayer(Terrestrial_habitats);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[10].addTo(map);
  }
  else {
    map.removeLayer(Terrestrial_habitats);
    legends[10].remove();
  }
});

$('#ZEPIM').click(function(){
  if ($('#ZEPIM').is(':checked')){
    map.addLayer(ZEPIM);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[11].addTo(map);
  }
  else{
    map.removeLayer(ZEPIM);
    legends[11].remove();
  }
});

$('#Zone_0').click(function(){
  if ($('#Zone_0').is(':checked')){
    map.addLayer(Zone_0);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[12].addTo(map);
  }
  else {
    map.removeLayer(Zone_0);
    legends[12].remove();
  }
});

$('#Zone_A1').click(function(){
  if ($('#Zone_A1').is(':checked')){
    map.addLayer(Zone_A1);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[13].addTo(map);
  }
  else {
    map.removeLayer(Zone_A1);
    legends[13].remove();
  }
});

$('#Zone_A2').click(function(){
  if ($('#Zone_A2').is(':checked')){
    map.addLayer(Zone_A2);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[14].addTo(map);
  }
  else {
    map.removeLayer(Zone_A2);
    legends[14].remove();
  }
});

$('#Zone_B').click(function(){
  if ($('#Zone_B').is(':checked')){
    map.addLayer(Zone_B);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[15].addTo(map);
  }
  else {
    map.removeLayer(Zone_B);
    legends[15].remove();
  }
});

$('#Zones').click(function(){
  if ($('#Zones').is(':checked')){
    map.addLayer(Zones);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[16].addTo(map);
  }
  else {
    map.removeLayer(Zones);
    legends[16].remove();
  }
});

$('#Anchoring').click(function(){
  if ($('#Anchoring').is(':checked')){
    map.addLayer(Anchoring);
    for (let i = 0; i < title.length; i++) {
        legends[i].remove();
    }
    legends[17].addTo(map);
  }
  else {
    map.removeLayer(Anchoring);
    legends[17].remove();
  }
});

$('#Fartet_recovery_plan').click(function(){
  if ($('#Fartet_recovery_plan').is(':checked')){
    map.addLayer(Fartet_recovery_plan);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[18].addTo(map);
  }
  else {
    map.removeLayer(Fartet_recovery_plan);
    legends[18].remove();
  }
});

$('#Fishing_company_zones').click(function(){
  if ($('#Fishing_company_zones').is(':checked')){
    map.addLayer(Fishing_company_zones);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[19].addTo(map);
  }
  else {
    map.removeLayer(Fishing_company_zones);
    legends[19].remove();
  }
});

$('#Sailing_speed').click(function(){
  if ($('#Sailing_speed').is(':checked')){
    map.addLayer(Sailing_speed);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[20].addTo(map);
  }
  else {
    map.removeLayer(Sailing_speed);
    legends[20].remove();
  }
});

$('#Flow_accumulation').click(function(){
  if ($('#Flow_accumulation').is(':checked')){
    map.addLayer(Flow_accumulation);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[21].addTo(map);
  }
  else {
    map.removeLayer(Flow_accumulation);
    legends[21].remove();
  }
});

$('#Flow_direction').click(function(){
  if ($('#Flow_direction').is(':checked')){
    map.addLayer(Flow_direction);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[22].addTo(map);
  }
  else {
    map.removeLayer(Flow_direction);
    legends[22].remove();
  }
});

$('#Mar_Menor_catchment_area').click(function(){
  if ($('#Mar_Menor_catchment_area').is(':checked')){
    map.addLayer(Mar_Menor_catchment_area);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[23].addTo(map);
  }
  else {
    map.removeLayer(Mar_Menor_catchment_area);
    legends[23].remove();
  }
});

$('#Irrigated_crops').click(function(){
  if ($('#Irrigated_crops').is(':checked')){
    map.addLayer(Irrigated_crops);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[24].addTo(map);
  }
  else {
    map.removeLayer(Irrigated_crops);
    legends[24].remove();
  }
});

$('#SIOSE_Land_cover').click(function(){
  if ($('#SIOSE_Land_cover').is(':checked')){
    map.addLayer(SIOSE_Land_cover);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[25].addTo(map);
  }
  else {
    map.removeLayer(SIOSE_Land_cover);
    legends[25].remove();
  }
});

$('#SIOSE_Land_uses').click(function(){
  if ($('#SIOSE_Land_uses').is(':checked')){
    map.addLayer(SIOSE_Land_uses);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[26].addTo(map);
  }
  else {
    map.removeLayer(SIOSE_Land_uses);
    legends[26].remove();
  }
});

$('#Selected_areas_for_the_implementation_of_thermo_solar_plants').click(function(){
  if ($('#Selected_areas_for_the_implementation_of_thermo_solar_plants').is(':checked')){
    map.addLayer(Selected_areas_for_the_implementation_of_thermo_solar_plants);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[27].addTo(map);
  }
  else {
    map.removeLayer(Selected_areas_for_the_implementation_of_thermo_solar_plants);
    legends[27].remove();
  }
});

$('#Corine_Land_Cover').click(function(){
  if ($('#Corine_Land_Cover').is(':checked')){
    map.addLayer(Corine_Land_Cover);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[28].addTo(map);
  }
  else {
    map.removeLayer(Corine_Land_Cover);
    legends[28].remove();
  }
});

$('#Declaration_of_Urgent_Measures').click(function(){
  if ($('#Declaration_of_Urgent_Measures').is(':checked')){
    map.addLayer(Declaration_of_Urgent_Measures);
    legends[5].addTo(map);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
    }
    legends[29].addTo(map);
  }
  else {
    map.removeLayer(Declaration_of_Urgent_Measures);
    legends[29].remove();
  }
});

$('#Municipalities').click(function(){
  if ($('#Municipalities').is(':checked')){
    map.addLayer(Municipalities);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[30].addTo(map);
  }
  else {
    map.removeLayer(Municipalities);
    legends[30].remove();
  }
});

$('#Regions').click(function(){
  if ($('#Regions').is(':checked')){
    map.addLayer(Regions);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[31].addTo(map);
  }
  else {
    map.removeLayer(Regions);
    legends[31].remove();
  }
});

$('#Bathymetry').click(function(){
  if ($('#Bathymetry').is(':checked')){
    map.addLayer(Bathymetry);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
    }
    legends[32].addTo(map);
  }
  else {
    map.removeLayer(Bathymetry);
    legends[32].remove();
  }
});

$('#DEM').click(function(){
  if ($('#DEM').is(':checked')){
    map.addLayer(DEM);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
    }
    legends[33].addTo(map);
  }
  else {
    map.removeLayer(DEM);
    legends[33].remove();
  } 
});

$('#Relief').click(function(){
  if ($('#Relief').is(':checked')){
    map.addLayer(Relief);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[34].addTo(map);
  }
  else {
    map.removeLayer(Relief);
    legends[34].remove();
  }
});

$('#Soil_regional_layer').click(function(){
  if ($('#Soil_regional_layer').is(':checked')){
    map.addLayer(Soil_regional_layer);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[35].addTo(map);
  }
  else {
    map.removeLayer(Soil_regional_layer);
    legends[35].remove();
  }
});

$('#Declaracion_Riesgo_Cuantitativo').click(function(){
  if ($('#Declaracion_Riesgo_Cuantitativo').is(':checked')){
    map.addLayer(Declaracion_Riesgo_Cuantitativo);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
    }
    legends[36].addTo(map);
  }
  else {
    map.removeLayer(Declaracion_Riesgo_Cuantitativo);
    legends[36].remove();
  }
});

$('#Declaracion_Riesgo_Quimico').click(function(){
  if ($('#Declaracion_Riesgo_Quimico').is(':checked')){
    map.addLayer(Declaracion_Riesgo_Quimico);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
    }
    legends[37].addTo(map);
  }
  else {
    map.removeLayer(Declaracion_Riesgo_Quimico);
    legends[37].remove();
  }
});

$('#Declaration_of_at_risk_of_not_achieving_good_quantitative_or_chemical_status').click(function(){
  if ($('#Declaration_of_at_risk_of_not_achieving_good_quantitative_or_chemical_status').is(':checked')){
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[38].addTo(map);
    map.addLayer(Declaration_of_at_risk_of_not_achieving_good_quantitative_or_chemical_status);
  }
  else {
    map.removeLayer(Declaration_of_at_risk_of_not_achieving_good_quantitative_or_chemical_status);
    legends[38].remove();
  }
});

$('#National_census_dischrages').click(function(){
  if ($('#National_census_dischrages').is(':checked')){
    map.addLayer(National_census_dischrages);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[39].addTo(map);
  }
  else {
    map.removeLayer(National_census_dischrages);
    legends[39].remove();
  }
});

$('#Surface_water_quality').click(function(){
  if ($('#Surface_water_quality').is(':checked')){
    map.addLayer(Surface_water_quality);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[40].addTo(map);
  }
  else {
    map.removeLayer(Surface_water_quality);
    legends[40].remove();
  }
});

$('#CHL').click(function(){
  if ($('#CHL').is(':checked')){
    map.addLayer(CHL);
    for (let i = 0; i < title.length; i++) {
      legends[i].remove();
  }
    legends[41].addTo(map);
  }
  else {
    map.removeLayer(CHL);
    legends[41].remove();
  }
});

