function gMap() {
	
	var mapCanvas = document.getElementById("googleMap");
	var mapCenter = new google.maps.LatLng(50.4335,30.54);

	var mapOptions = {
		center: mapCenter,
		zoom: 13,
		disableDefaultUI: true
	};

	var map = new google.maps.Map(mapCanvas, mapOptions);

}

$(document).ready(function(){

	// slider #1
	$('.slick-1').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'ease',
		arrows: false,
		dots: true,
		pauseOnDotsHover: true
	});

	// slider #2
	$('.slick-2').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'ease',
		arrows: true,
		dots: true,
		pauseOnDotsHover: true,
		responsive: [
    {
      breakpoint: 575,
      settings: {
        arrows: false
      }
    }]
	});

	// overlay on click
	$('.know-more').click(
		function(){
			$(this).next('.add-info').css({"height":"100%"});
		}
	);

	$('.add-info-close').click(
		function(){
			$(this).parent().css({"height":"0%"});
		}
	);

});