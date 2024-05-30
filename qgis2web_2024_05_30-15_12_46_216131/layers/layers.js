ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([223764.437732, 6611711.774844, 525517.432297, 6783089.537150]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Flyingsquirrelsightings18402024_1 = new ol.format.GeoJSON();
var features_Flyingsquirrelsightings18402024_1 = format_Flyingsquirrelsightings18402024_1.readFeatures(json_Flyingsquirrelsightings18402024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Flyingsquirrelsightings18402024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flyingsquirrelsightings18402024_1.addFeatures(features_Flyingsquirrelsightings18402024_1);
var lyr_Flyingsquirrelsightings18402024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flyingsquirrelsightings18402024_1, 
                style: style_Flyingsquirrelsightings18402024_1,
                popuplayertitle: "Flying squirrel sightings 1840-2024",
                interactive: true,
    title: 'Flying squirrel sightings 1840-2024<br />\
    <img src="styles/legend/Flyingsquirrelsightings18402024_1_0.png" /> 1 - 22<br />\
    <img src="styles/legend/Flyingsquirrelsightings18402024_1_1.png" /> 22 - 63<br />\
    <img src="styles/legend/Flyingsquirrelsightings18402024_1_2.png" /> 63 - 135<br />\
    <img src="styles/legend/Flyingsquirrelsightings18402024_1_3.png" /> 135 - 243<br />\
    <img src="styles/legend/Flyingsquirrelsightings18402024_1_4.png" /> 243 - 481<br />\
    <img src="styles/legend/Flyingsquirrelsightings18402024_1_5.png" /> 481 - 817<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Flyingsquirrelsightings18402024_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Flyingsquirrelsightings18402024_1];
lyr_Flyingsquirrelsightings18402024_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Flyingsquirrelsightings18402024_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Flyingsquirrelsightings18402024_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'NUMPOINTS': 'inline label - visible with data', });
lyr_Flyingsquirrelsightings18402024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});