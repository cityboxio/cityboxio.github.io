/*** start of autosuggest ***/

var options = {
	//url: "./../DATA/cities.json",
	//url: "./DATA/cities.small.json",
	url: "./DATA/world-cities_json.json",
	placeholder: "search a city",
	adjustWidth: true,	
	//categories: [
	//	{   //Category fruits
	//		listLocation: "Brazil",
	//		header: "-- Brazil --"
	//	}, 
	//	{   //Category vegetables
	//		listLocation: "Egypt",
	//		header: "-- Egypt --"
	//	}
	//]

	//getValue: "city",
	//getValue: "name",
	getValue: function(element) {
		//return $(element).find("name").text();	
		return element.name;
	},
	list: {
		match: {
			enabled: true
		},
		sort: {
			enabled: true
		},
		maxNumberOfElements: 10,

		showAnimation: {
			type: "slide",
			time: 300
		},
		hideAnimation: {
			type: "slide",
			time: 300
		}
	},
	template: {
		type: "custom",
		method: function(value, item) {
			//return "<img src='" + item.icon + "' /> | " + item.type + " | " + value;
			return value + ", " + item.subcountry + ", " + item.country;
		}
	}
	//template: {
	//	type: "iconRight",
	////	fields: {
	//		iconSrc: "icon"
	//	}
	//}
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

/*** start of typed.js ***/
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	backDelay: 7000,
	showCursor: false,
	loop: true,
	typeSpeed: 1
});
/*** end of typed.js ***/
