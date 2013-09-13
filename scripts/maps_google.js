// STYLED GOOGLE MAP WITH BALTIMORE NEIGHBORHOODS
function mapInitialize() {

console.log("it's mapping time!");

   // Create an array of styles.
var styles = [
{
"featureType": "road", "elementType": "geometry", "stylers": [
{ "visibility": "on" },
{ "color": "#dcdce6" }
]
},{
"featureType": "landscape", "stylers": [
{ "visibility": "on" },
{ "color": "#afc1c8" }
]
},{
"featureType": "water", "stylers": [
{ "color": "#588ea2" },
{ "visibility": "on" }
]
},{
"featureType": "poi", "elementType": "geometry", "stylers": [
{ "visibility": "on" },
{ "color": "#96bba5" }
]
},{
"elementType": "labels.text.stroke", "stylers": [
{ "visibility": "on" },
{ "color": "#dcdce6" }
]
},{
"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [
{ "visibility": "off" }
]
},{
"featureType": "administrative", "elementType": "labels", "stylers": [
{ "visibility": "off" }
]
},{
}
]
  
// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
var styledMap = new google.maps.StyledMapType(styles,
{name: "Styled Map"});
  
// Create a map object, and include the MapTypeId to add
// to the map type control.
var mapOptions = {
zoom: 19,
center: new google.maps.LatLng(39.283333, -76.616667),
mapTypeControlOptions: {
mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
}
};
// a map for every tab
var map1 = new google.maps.Map(document.getElementById('map_1'), mapOptions);
var map2 = new google.maps.Map(document.getElementById('map_2'), mapOptions);
var map3 = new google.maps.Map(document.getElementById('map_3'), mapOptions);
  
//Associate the styled map with the MapTypeId and set it to display.
map1.mapTypes.set('map_style', styledMap);
map1.setMapTypeId('map_style');
map2.mapTypes.set('map_style', styledMap);
map2.setMapTypeId('map_style')
map3.mapTypes.set('map_style', styledMap);
map3.setMapTypeId('map_style')

var ctaLayer = new google.maps.KmlLayer('http://student.mica.edu/amarcotte/dataviz/Baltimore-Neighborhoods.kml');
ctaLayer.setMap(map1);
  
};


$(document).ready(mapInitialize);