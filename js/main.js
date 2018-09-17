/*** start of autosuggest ***/

var options = {
	url: "./DATA/fruitsAndVegetables.json",
	placeholder: "search a city",
	categories: [
		{   //Category fruits
			listLocation: "fruits",
			header: "-- Fruits --"
		}, 
		{   //Category vegetables
			listLocation: "vegetables",
			header: "-- Vegetables --"
		}
	]

};

$("#categories-basic").easyAutocomplete(options);
/*** end of autosuggest ***/

/*** start of map ***/

//var map = L.map('map').setView([-41.2858, 174.78682], 14);
var map = L.map('map').setView([31.205753, 29.924526], 14);
//var map = L.map('map').setView([30.2, 31], 8);
mapLink = 
	'<a href="https://www.citybox.io/copyright">citybox.io</a>';
wholink = 
	'';
L.tileLayer(
	'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		attribution: '&copy; '+mapLink+', '+wholink,
		maxZoom: 18,
	}).addTo(map);
// 
// mapLink = 
// '<a href="http://www.esri.com/">Esri</a>';
// wholink = 
// 	'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

/*** end of map ***/
