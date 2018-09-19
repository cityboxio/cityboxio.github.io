/*** start of autosuggest ***/

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
		maxNumberOfElements: 5,

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
			
			return "</br>" + 
				"</br>" + 
				"<b>" + value + 
				"</b>" + 
				", " + 
				item.subcountry + 
				", " +
				item.country +
				'<img src="img/flags/'+ 
				findFlag(item.country).toLowerCase() +
				'.svg" alt="flag" style="width: 40px; float: right;" class="flag">'+
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
/*** end of autosuggest ***/

/*** start of map ***/

//var map = L.map('map').setView([-41.2858, 174.78682], 14);
var map = L.map('map').setView([31.205753, 29.924526], 11);
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
	backDelay: 3000,
	showCursor: false,
	//loop: true,
	typeSpeed: 1
});
/*** end of typed.js ***/

console.log("Hello world!"); 

$( document ).ready(function() {
	console.log( "ready!" );
});
