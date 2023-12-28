/* BIG IMAGE CARROUSEL */

var imgBand = document.getElementById('img_band');
var imgBandArrLeft = document.getElementById('img_carousel_arrL');
var imgBandArrRight = document.getElementById('img_carousel_arrR');
var position = 0;

imgBandArrRight.onclick = function() {
  position -= 299;
  if (position<-299*4) {
    position = -299*4;
  }
  imgBand.style.marginLeft = position + 'px';
}

imgBandArrLeft.onclick = function() {
  position += 299;
  if (position>0) {
    position = 0;
  }
  imgBand.style.marginLeft = position + 'px';
}


/* HOVER-EFFECT FOR BIG IMAGE CARROUSEL*/

imgBandArrRight.onmouseover = function() {
  imgBandArrRight.setAttribute('src', 'images/arrowR-green.png');
}
imgBandArrRight.onmouseleave = function() {
  imgBandArrRight.setAttribute('src', 'images/arrowR-black2.png');
}

imgBandArrLeft.onmouseover = function() {
  imgBandArrLeft.setAttribute('src', 'images/arrowL-green2.png');
}
imgBandArrLeft.onmouseleave = function() {
  imgBandArrLeft.setAttribute('src', 'images/arrowL-black.png');
}


/* SMALL IMAGE CARROUSEL */

var smImgBand = document.getElementById('sm_img_band');
var smImgBandArrLeft = document.getElementById('smimg_carousel_arrL');
var smImgBandArrRight = document.getElementById('smimg_carousel_arrR');
var smallPosition = 0;

smImgBandArrRight.onclick = function() {
  smallPosition -= 87;
  if (smallPosition<-87*4) {
    smallPosition = -87*4;
  }
  smImgBand.style.marginLeft = smallPosition + 'px';
}

smImgBandArrLeft.onclick = function() {
  smallPosition += 87;
  if (smallPosition>0) {
    smallPosition = 0;
  }
  smImgBand.style.marginLeft = smallPosition + 'px';
}


/* HOVER-EFFECT FOR SMALL IMAGE CARROUSEL*/

smImgBandArrRight.onmouseover = function() {
  smImgBandArrRight.setAttribute('src', 'images/arrowR-green.png');
}
smImgBandArrRight.onmouseleave = function() {
  smImgBandArrRight.setAttribute('src', 'images/arrowR-black2.png');
}

smImgBandArrLeft.onmouseover = function() {
  smImgBandArrLeft.setAttribute('src', 'images/arrowL-green2.png');
}
smImgBandArrLeft.onmouseleave = function() {
  smImgBandArrLeft.setAttribute('src', 'images/arrowL-black.png');
}


/* SLIDER THUMB*/

var sliderElem = document.getElementById('slider');
var thumbElem = document.getElementById('thumb');
var thumbLine = document.getElementById('colorDiv');
var thumbLine2 = document.getElementById('colorDiv2');
var videoBand = document.getElementById('vid_band');
    
thumbElem.onmousedown = function(e) {
  var thumbCoords = getCoords(thumbElem);
  var shiftX = e.pageX - thumbCoords.left;

  var sliderCoords = getCoords(sliderElem);

  document.onmousemove = function(e) {
    var newLeft = e.pageX - shiftX - sliderCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumbElem.style.left = newLeft + 'px';
    thumbLine.style.left = newLeft - 1170 + 23 + 'px';
    thumbLine2.style.left = newLeft + 23 + 'px';
    videoBand.style.marginLeft = -newLeft + 'px';
  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };

  return false; // disable selection start (cursor change)
};

thumbElem.ondragstart = function() {
  return false;
};

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}


/* REVERSED TIMER */

var day = document.getElementById('d_day');
var hour = document.getElementById('d_hour');
var minute = document.getElementById('d_minute');
var second = document.getElementById('d_second');

function reversedTimer() {
  var stopDate = new Date(2018,6,30,23,59);
  var nowDate = new Date();
  var date = stopDate - nowDate; // різниця в мс
  var delta;

  var days = Math.floor(date/86400000);
  if (days < 10) days = '0' + days;
  day.innerHTML = days;
  delta = date - days*86400000;

  var hours = Math.floor(delta/3600000);
  if (hours < 10) hours = '0' + hours;
  hour.innerHTML = hours;
  delta = delta - hours*3600000;

  var minutes = Math.floor(delta/60000);
  if (minutes < 10) minutes = '0' + minutes;
  minute.innerHTML = minutes;
  delta = delta - minutes*60000;

  var seconds = Math.floor(delta/1000);
  if (seconds < 10) seconds = '0' + seconds;
  second.innerHTML = seconds;
}

function startReversedTimer() {
  setInterval(reversedTimer, 1000);
  reversedTimer();
}

startReversedTimer();


 /*HOVER-EFFECT FOR HINT-ELEMENT*/

var hoverElem = document.getElementById('hint_info');
var hintElem = document.getElementById('hint');

hoverElem.onmouseover = function() {
  hintElem.setAttribute('style', 'display:block');
}

hoverElem.onmouseleave = function() {
  hintElem.setAttribute('style', 'display:none');
}








































/* IMAGE SLIDER */

$(document).ready(function(){

  $(".prev").click( function() { plusSlides(-1); });
  $(".next").click( function() { plusSlides(1); });
  $(".dot1").click( function() { currentSlide(1); });
  $(".dot2").click( function() { currentSlide(2); });
  $(".dot3").click( function() { currentSlide(3); });
  $(".dot4").click( function() { currentSlide(4); });

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }














  var isHover = false;
  var slideIndex = 0;

  rollSlides();
  function rollSlides(n) {

    var i;
    var slidesContainer = document.getElementsByClassName("slideshow-container");
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if(n) {
      slides[n].style.display = "block";
      dots[n].className += " active";
    }

    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};

    $(slidesContainer).hover(
      function () {
        isHover = true;
      },
      function () {
        isHover = false;
      }
    );

    if(isHover == false) {

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", ""); 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

    var timer = setTimeout(rollSlides, 3000);
  }

});



































/* GOOGLE MAP IN FOOTER */

function footerMap() {
  
  var mapCanvas = document.getElementById("googleMap");
  var mapCenter = new google.maps.LatLng(50.4335,30.54);

  var mark1 = new google.maps.LatLng(50.451,30.59);
  var mark2 = new google.maps.LatLng(50.425,30.525);
  var mark3 = new google.maps.LatLng(50.42,30.47);

  var mapOptions = {
    center: mapCenter,
    zoom: 13,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker1 = new google.maps.Marker({
    position: mark1
  });
  marker1.setMap(map);

  var marker2 = new google.maps.Marker({
    position: mark2
  });
  marker2.setMap(map);

  var marker3 = new google.maps.Marker({
    position: mark3
  });
  marker3.setMap(map);

}