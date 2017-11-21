//Script Shrink
$(window).scroll(function() {
	if ($(document).scrollTop() > 200) {
	    $('nav').addClass('shrink');
	} else {
	    $('nav').removeClass('shrink');
	}
});	

//Script Shrink
$(window).scroll(function() {
	if ($(document).scrollTop() > 10) {
	    $('nav').addClass('navshrink');
	} else {
	    $('nav').removeClass('navshrink');
	}
});	

//Load Banner Screen
function myFunction(){
	$('div.banner').addClass('loadBanner');
}

//Google Map
var map;
   function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 16.4389273, lng: 100.3435963},
     zoom: 15
   });
//Marker
	 var marker = new google.maps.Marker({
		 position: {lat: 16.4389273, lng: 100.3435963},
		 map: map,
		 icon:"images/marker.png"
	});
//Popup name
	 var info = new google.maps.InfoWindow({
	 	 content: "<div style='font-size:15px; font-weight: bold;'>เม็ดบัวทอดแม่จินดา</div>" + "<div style='font-size:15px;'>295/5 ต.ในเมือง อ.เมือง<br>จ.พิจิตร 66000<br>โทร 089-955-4823</div>"
	 });
	 google.maps.event.addListener(marker, "click", function() {
	 	 info.open(map, marker);
	 });
}

// Jquery. change element position onclick

$('li a').on('click', function () {
    var id = $(this).parent('li').attr('id');
    $('html,body').animate({
        scrollTop: $("div#" + id).offset().top
    },'slow');
});