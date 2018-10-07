/*** tinytoggle ***/
// Customize default options
$.fn.TinyToggle.defaults.type = "square";

// Define your custom size and use it
$.fn.TinyToggle.sizes["mysize"] = "36px";
$.fn.TinyToggle.defaults.size = "mysize";

// Initialize plug-in    
$("#datasource_c").tinyToggle({
	type:    "circle",
	//palette: "red", 
	//size:    "huge", // you can also specify defined custom sizes Ex. "mysize"
	onReady: function() { 
		/* do something... 
	alert("hellotiny")
		 * */ 
	},
	onClick: function() { /* do something */ },
	onChange: function() { /* do something... */ },
	onCheck: function() { /* do something... */ },
	onUncheck: function() { /* do something... */ },
	onDisabled: function() { /* do something... */ },
	onEnabled: function() { /* do something... */ }
});    
/*** end of tinytoggle ***/


$( document ).ready(function() {
	console.log( "ready!" );
	/*************************/
	/*** start of typed.js ***/
	/*************************/
	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		backDelay: 2000,
		showCursor: false,
		//loop: true,
		typeSpeed: 1
	});
	/***********************/
	/*** end of typed.js ***/
	/***********************/

	/********************/
	/*** start of map ***/
	/********************/

	//var map = L.map('map', {drawControl: true}).setView(
	var map = L.map('map',{zoomControl: false}).setView(
		[31.205753, 29.924526], 
		8); // alexandria

	//var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	//var osmAttrib='Map data &copy; OpenStreetMap contributors';
	//var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});
	//map.addLayer(osm);
	//map.setView(new L.LatLng(59.92448055859924, 10.758276373601069),10);
	//Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls
	//var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
	//var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);


	//var myLayer = L.geoJSON().addTo(map);
	//myLayer.addData(geojsonFeature);

	//var geojsonLayer = new L.geoJSON.AJAX("./DATA/cities.geojson");       
	//geojsonLayer.addTo(map);
	var geocities = JSON.parse($.ajax({'url': "./DATA/samples/cities.small.geojson", 'async': false}).responseText); 
	var citiesLayer = new L.geoJSON().addTo(map);
	citiesLayer.addData(geocities);


	mapLink='<a href="https://www.citybox.io/copyright">citybox.io</a>';
	wholink='';
	//L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);
	//L.tileLayer('http://a.tile.stamen.com/toner/${z}/${x}/${y}', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);
	//L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);
	//L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);
	//L.tileLayer('http://b.tile.stamen.com/toner-hybrid/{z}/{x}/{y}.png', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);
	//L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);
	blackwhite='http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png';
	osm=L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);
	//L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {attribution: '&copy; '+mapLink+', '+wholink,maxZoom: 18,}).addTo(map);

	//var osm2 = new L.TileLayer(blackwhite, {minZoom: 0, maxZoom: 13, attribution: "blah"}).addTo(map);
	//var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);

	var osmAttrib='Map data &copy; OpenStreetMap contributors';
	//var osm2 = new L.TileLayer(blackwhite, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
	var osm2 = new L.TileLayer(blackwhite, {minZoom: 1, maxZoom: 13, attribution: osmAttrib });
	//var miniMap= new L.Control.MiniMap(osm2, { toggleDisplay: true, position: 'topleft' }).addTo(map);
	var rect1 = {color: "grey", weight: 1};
	var rect2 = {color: "grey", weight: 1, opacity:0, fillOpacity:0};
	var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, aimingRectOptions : rect1, shadowRectOptions: rect2, position: 'bottomright'}).addTo(map);

	L.control.zoom({
		position:'bottomright'
	}).addTo(map);

	// 
	// mapLink = 
	// '<a href="http://www.esri.com/">Esri</a>';
	// wholink = 
	// 	'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';


	L.Control.DatasourceNav = L.Control.extend({
		onAdd: function(map) {
			//var img = L.DomUtil.create('img');
			//var img = L.DomUtil.get('logo');
			var nav = L.DomUtil.get('citybox-datasource-nav');

			//img.src = '../../docs/images/logo.png';
			//img.style.width = '200px';

			return nav;
		},

		onRemove: function(map) {
			// Nothing to do here
		}
	});

	L.control.datasourcenav = function(opts) {
		return new L.Control.DatasourceNav(opts);
	}

	//L.control.datasourcenav({ position: 'bottomleft' }).addTo(map);
	L.control.datasourcenav({ position: 'bottomleft' }).addTo(map);

	/******************/
	/*** end of map ***/
	/******************/


	/****************************/
	/*** start of autosuggest ***/
	/****************************/

	function findFlag(country){

		var flags={"Andorra":"AD","United Arab Emirates":"AE","Afghanistan":"AF","Antigua and Barbuda":"AG","Anguilla":"AI","Albania":"AL","Armenia":"AM","Netherlands Antilles":"AN","Angola":"AO","Antarctica":"AQ","Argentina":"AR","American Samoa":"AS","Austria":"AT","Australia":"AU","Aruba":"AW","Åland Islands":"AX","Azerbaijan":"AZ","Bosnia and Herzegovina":"BA","Barbados":"BB","Bangladesh":"BD","Belgium":"BE","Burkina Faso":"BF","Bulgaria":"BG","Bahrain":"BH","Burundi":"BI","Benin":"BJ","Saint Barthélemy":"BL","Bermuda":"BM","Brunei Darussalam":"BN","Bolivia, Plurinational State of":"BO","Caribbean Netherlands":"BQ","Brazil":"BR","Bahamas":"BS","Bhutan":"BT","Bouvet Island":"BV","Botswana":"BW","Belarus":"BY","Belize":"BZ","Canada":"CA","Cocos (Keeling) Islands":"CC","Congo, the Democratic Republic of the":"CD","Central African Republic":"CF","Congo":"CG","Switzerland":"CH","Côte d'Ivoire":"CI","Cook Islands":"CK","Chile":"CL","Cameroon":"CM","China":"CN","Colombia":"CO","Costa Rica":"CR","Cuba":"CU","Cape Verde":"CV","Curaçao":"CW","Christmas Island":"CX","Cyprus":"CY","Czech Republic":"CZ","Germany":"DE","Djibouti":"DJ","Denmark":"DK","Dominica":"DM","Dominican Republic":"DO","Algeria":"DZ","Ecuador":"EC","Estonia":"EE","Egypt":"EG","Western Sahara":"EH","Eritrea":"ER","Spain":"ES","Ethiopia":"ET","Europe":"EU","Finland":"FI","Fiji":"FJ","Falkland Islands (Malvinas)":"FK","Micronesia, Federated States of":"FM","Faroe Islands":"FO","France":"FR","Gabon":"GA","England":"GB-ENG","Northern Ireland":"GB-NIR","Scotland":"GB-SCT","Wales":"GB-WLS","United Kingdom":"GB","Grenada":"GD","Georgia":"GE","French Guiana":"GF","Guernsey":"GG","Ghana":"GH","Gibraltar":"GI","Greenland":"GL","Gambia":"GM","Guinea":"GN","Guadeloupe":"GP","Equatorial Guinea":"GQ","Greece":"GR","South Georgia and the South Sandwich Islands":"GS","Guatemala":"GT","Guam":"GU","Guinea-Bissau":"GW","Guyana":"GY","Hong Kong":"HK","Heard Island and McDonald Islands":"HM","Honduras":"HN","Croatia":"HR","Haiti":"HT","Hungary":"HU","Indonesia":"ID","Ireland":"IE","Israel":"IL","Isle of Man":"IM","India":"IN","British Indian Ocean Territory":"IO","Iraq":"IQ","Iran, Islamic Republic of":"IR","Iceland":"IS","Italy":"IT","Jersey":"JE","Jamaica":"JM","Jordan":"JO","Japan":"JP","Kenya":"KE","Kyrgyzstan":"KG","Cambodia":"KH","Kiribati":"KI","Comoros":"KM","Saint Kitts and Nevis":"KN","Korea, Democratic People's Republic of":"KP","Korea, Republic of":"KR","Kuwait":"KW","Cayman Islands":"KY","Kazakhstan":"KZ","Lao People's Democratic Republic":"LA","Lebanon":"LB","Saint Lucia":"LC","Liechtenstein":"LI","Sri Lanka":"LK","Liberia":"LR","Lesotho":"LS","Lithuania":"LT","Luxembourg":"LU","Latvia":"LV","Libya":"LY","Morocco":"MA","Monaco":"MC","Moldova, Republic of":"MD","Montenegro":"ME","Saint Martin":"MF","Madagascar":"MG","Marshall Islands":"MH","Macedonia, the former Yugoslav Republic of":"MK","Mali":"ML","Myanmar":"MM","Mongolia":"MN","Macao":"MO","Northern Mariana Islands":"MP","Martinique":"MQ","Mauritania":"MR","Montserrat":"MS","Malta":"MT","Mauritius":"MU","Maldives":"MV","Malawi":"MW","Mexico":"MX","Malaysia":"MY","Mozambique":"MZ","Namibia":"NA","New Caledonia":"NC","Niger":"NE","Norfolk Island":"NF","Nigeria":"NG","Nicaragua":"NI","Netherlands":"NL","Norway":"NO","Nepal":"NP","Nauru":"NR","Niue":"NU","New Zealand":"NZ","Oman":"OM","Panama":"PA","Peru":"PE","French Polynesia":"PF","Papua New Guinea":"PG","Philippines":"PH","Pakistan":"PK","Poland":"PL","Saint Pierre and Miquelon":"PM","Pitcairn":"PN","Puerto Rico":"PR","Palestine":"PS","Portugal":"PT","Palau":"PW","Paraguay":"PY","Qatar":"QA","Réunion":"RE","Romania":"RO","Serbia":"RS","Russian Federation":"RU","Rwanda":"RW","Saudi Arabia":"SA","Solomon Islands":"SB","Seychelles":"SC","Sudan":"SD","Sweden":"SE","Singapore":"SG","Saint Helena, Ascension and Tristan da Cunha":"SH","Slovenia":"SI","Svalbard and Jan Mayen Islands":"SJ","Slovakia":"SK","Sierra Leone":"SL","San Marino":"SM","Senegal":"SN","Somalia":"SO","Suriname":"SR","South Sudan":"SS","Sao Tome and Principe":"ST","El Salvador":"SV","Sint Maarten (Dutch part)":"SX","Syrian Arab Republic":"SY","Swaziland":"SZ","Turks and Caicos Islands":"TC","Chad":"TD","French Southern Territories":"TF","Togo":"TG","Thailand":"TH","Tajikistan":"TJ","Tokelau":"TK","Timor-Leste":"TL","Turkmenistan":"TM","Tunisia":"TN","Tonga":"TO","Turkey":"TR","Trinidad and Tobago":"TT","Tuvalu":"TV","Taiwan":"TW","Tanzania, United Republic of":"TZ","Ukraine":"UA","Uganda":"UG","US Minor Outlying Islands":"UM","United States":"US","Uruguay":"UY","Uzbekistan":"UZ","Holy See (Vatican City State)":"VA","Saint Vincent and the Grenadines":"VC","Venezuela, Bolivarian Republic of":"VE","Virgin Islands, British":"VG","Virgin Islands, U.S.":"VI","Viet Nam":"VN","Vanuatu":"VU","Wallis and Futuna Islands":"WF","Kosovo":"XK","Samoa":"WS","Yemen":"YE","Mayotte":"YT","South Africa":"ZA","Zambia":"ZM","Zimbabwe":"ZW"};

		var flag=flags[country];
		if (typeof(flag) == 'undefined') {
			flag="error";	
		}
console.log("found flag: " + flag);

return flag;
};

var options = {
	//url: "./../DATA/cities.json",
	//url: "./DATA/cities.small.json",
	url: "./DATA/world-cities_json.json",
	placeholder: "search a city",
	//adjustWidth: true,	
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
		maxNumberOfElements: 6,

		showAnimation: {
			type: "slide",
			time: 300
		},
		hideAnimation: {
			type: "slide",
			time: 300
		},
		onChooseEvent: function(value, item) {
			var value = $("#categories-basic").getSelectedItemData().name;
			var all = $("#categories-basic").getSelectedItemData();
			//alert(value);
			//alert(all.toSource());
			//alert(all.country);
			//$("#data-holder").val(value).trigger("change");
		}
	},
	template: {
		type: "custom",
		method: function(value, item) {
			//return "<img src='" + item.icon + "' /> | " + item.type + " | " + value;

			return "</br>" + 
				"</br>" + 
				"<b>" + value + 
				"</b>" + 
				", </br>" + 
				item.subcountry + 
				", " +
				item.country +
				'<img src="img/flags/'+ 
				findFlag(item.country).toLowerCase() +
				'.svg" alt="" style="width: 40px; height: 20; float: right;" class="flag">'+
				"</br>" +
				"</br>" +
				"</br>"  
			;
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
$('#categories-basic').focus();
/**************************/
/*** end of autosuggest ***/
/**************************/

/**************************/
/***** start of nav *******/
/**************************/

//var vex = require('vex-js');
//vex.registerPlugin(require('vex-dialog'));
//vex.defaultOptions.className = 'vex-theme-top';
vex.defaultOptions.className = 'vex-theme-wireframe';

//vex.dialog.confirm({
//	message: 'Are you absolutely sure you want to destroy the alien planet?',
//	callback: function (value) {
//		if (value) {
//			console.log('Successfully destroyed the planet.')
//		} else {
//			console.log('Chicken.')
//		}
//	}
//})

//$('.btn').on('click',function(){
$('.icon').on('click',function(){
	if($(this).attr('data-click-state') == 1) {
		var color='#001f3f';
		$(this).attr('data-click-state', 0)
		$(this).css('color', color)
		$(this).css('text-shadow', '3px 3px 16px ' + color)
	} else if ($(this).attr('data-click-state') == 2) {
		var color='#0074D9';
		$(this).attr('data-click-state', 1)
		$(this).css('color', color)
		$(this).css('text-shadow', '3px 3px 16px ' + color)
	} else if ($(this).attr('data-click-state') == 3) {
		var color='#7FDBFF';
		$(this).attr('data-click-state', 2)
		$(this).css('color', color)
		$(this).css('text-shadow', '3px 3px 16px ' + color)
	} else {
		var color=' #F012BE ';
		$(this).attr('data-click-state', 3)
		$(this).css('color', color)
		$(this).css('text-shadow', '3px 3px 16px ' + color)
	}
});

// color schme https://clrs.cc/
//$('.icon').on('click',function(){
//$('.btn').on('click',function(){
$('.citybox-datasource').on('click',function(){
	//vex.dialog.alert('Thanks for checking out </br>vex!')
	//showDialog(function(notes) {
	//	$('#notes').text(notes);
	//})
	var cityboxdatasource = $(this).find('a').text();
	vex.dialog.open({
		unsafeMessage: '<b>' + cityboxdatasource + '</b> data for city, country',
		input: [
			'<hr>', 
			'icons here for updating the map', 
			'<hr>', 
			'icons here for downloads', 
			//'<i class="fas fa-flask icon"></i>',
			'<i class="far fa-file-excel icon"></i>',
			'<i class="far fa-file-pdf icon"></i>',
			'<div>',
			//'download in pdf, csv, blahblah',
			'</div>'
		].join(''),
		callback: function (data) {
			if (!data) {
				return console.log('Cancelled')
			}
			console.log('somthing');
				//TODO update map panel of the selected things	
			$('.demo-result-custom-vex-dialog').show().html([
				'<h4>Result</h4>',
				'<p>',
				'Date: <b>' + data.date + '</b><br/>',
				'Color: <input type="color" value="' + data.color + '" readonly />',
				'</p>'
			].join(''))
		}
	})
	//var color='white';
	//$(this).css('color', color)
	//$(this).css('background-color', "black")
	//$(this).css('text-shadow', '3px 3px 16px ' + color)
});

/* can be used to show info about the icon */
$( ".icon" ).hover(
	function() {
		//vex.dialog.alert('Thanks for checking out vex!')
		//TODO open modal 
		//$( this ).find("span").css( "margin", "12px" );	
	}, function() {
		//TODO close modal 
		//$( "p" ).remove( ":contains('Hello')" );
	}
);


$('.slider1').slick({
	prevArrow: $("#slider1up"),
	nextArrow: $("#slider1down"),
	infinite: true,
	slidesToShow: 5,
	adaptiveHeight: true,
	slidesToScroll: 2,
	speed: 1000,
	//rows: 3,
	autoplaySpeed: 3000,
	autoplay: true,
	//fade: true,
	//centerMode: true,	
	focusOnSelect: true,
	vertical: true,
	verticalSwiping: true,
	waitForAnimate: false,
	useCSS: true, //Enable/Disable CSS Transitions
	//appendArrows: $(".arrows"),
	//cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
	cssEase: 'linear',
	touchThreshold: 100
});
/**************************/
/****** end of nav ********/
/**************************/

});
