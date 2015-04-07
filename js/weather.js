
var list;
var getLoc = function(){
	$("#search").click(function(){
		$(".list").empty();
		var q = $("#location").val();
		var url = "http://api.openweathermap.org/data/2.5/weather?q="+q;
		console.log(url);
		 $.getJSON(url,function(data){
		 	list = "<li>longitude = "+data.coord.lon+"</li>";
		 	 list += "<li>latitude = "+data.coord.lat+"</li>";
		 	 list += "<li>Weather = "+data.weather[0].main+" "+ data.weather[0].description+"<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'/></li>";
		 	 
		 	$(".list").append(list);
		 	
				var mapOptions = {
				  center: { lat: data.coord.lat, lng: data.coord.lon},
				  zoom: 8
				};
				var map = new google.maps.Map(document.getElementById('map-canvas'),
				    mapOptions);


		 });	
	})
};

function initialize(lon,latt) {

	var mapOptions = {
	  center: { lat: latt, lng: lon},
	  zoom: 8
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
	    mapOptions);
}


$(document).ready(function(){
	
	getLoc();
	google.maps.event.addDomListener(window, 'load', initialize());

});




