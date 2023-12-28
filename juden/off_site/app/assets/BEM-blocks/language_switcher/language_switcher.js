$(document).ready(function(){

	var href = window.location.href;
	if (href.indexOf('_en.html') > 0) {
	  $('.language-switcher__shutter').css({'width':'50%','left':'0px'});
  } else {
  	$('.language-switcher__shutter').css({'width':'50%','left':'50%'});
  }

	$('.language-switcher__shutter').click(function(){
		var pos = href.indexOf('_en.html');
    if (pos > 0) {
    	href = href.substring(0,pos) + href.substring(pos+3);
    } else {
    	var pos = href.indexOf('.html');
      if (pos > 0) {
    	  href = href.substring(0,pos) + '_en' + href.substring(pos);
      }
      if (pos < 0) {
        href = href + 'index_en.html';
      }
    }

		$('.language-switcher__shutter').attr('href',href);
	});
});