$(document).ready(function(){

  /* ↓↓↓ NAVIGATION  BUTTON↓↓↓ */
  var toggle = false;
  $(".navigation i").click(function(){
    if(toggle==false) {
      $(".navigation").css({"height":"226px"});
      $(".nav-menu li").css({
                              "display":"block",
                              "position":"absolute",
                              "left":"50%",
                              "transform":"translate(-50%)",
                            });
      $(".nav-menu li a").css({
                              "border":"1px solid grey",
                              "width":"300px",
                              "text-align":"center"
                            });
      $(".nav-menu li:nth-of-type(1)").css({"top":"80px"});
      $(".nav-menu li:nth-of-type(2)").css({"top":"120px"});
      $(".nav-menu li:nth-of-type(3)").css({"top":"160px"});
      $(".nav-menu li:nth-of-type(4)").css({"top":"200px"});
      toggle=true;
    } else {
      $(".navigation").css({"height":"80px"});
      $(".nav-menu li").css({"display":"none"});
      toggle=false;
    }
  });

  $(".nav-menu li a").hover(
    function(){
      $(this).css({"background-color":"rgb(93,180,66)"});
      $(this).css({"color":"white"});
    },
    function(){
      $(this).css({"background-color":"white"});
      $(this).css({"color":"black"});
    }
  );

  $(window).click(function(event){
    if (!event.target.matches('.navigation i') && toggle==true) {
      $(".navigation").css({"height":"80px"});
      $(".nav-menu li").css({"display":"none"});
      toggle=false;
    }
  });

  /* ↑↑↑ /NAVIGATION ↑↑↑ */

  /* SECTION 1 IMAGE SLIDER */

  $(".prev").click( function() { plusSlides(-1); });
  $(".next").click( function() { plusSlides(1); });
  $(".dot-block-1").click( function() { currentSlide(1); });
  $(".dot-block-2").click( function() { currentSlide(2); });
  $(".dot-block-3").click( function() { currentSlide(3); });


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-item");
    var dots = document.getElementsByClassName("dot-block");
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
    var slides = document.getElementsByClassName("slide-item");
    var dots = document.getElementsByClassName("dot-block");
    
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


  /* SECTION 2 HOVER */

  $("#a1").hover(function(){
    $("#d1").css({"border":"1px solid rgb(93,180,66)"});
  },
  function(){
    $("#d1").css({"border":"1px solid rgb(204,204,204)"});
  });

  $("#a2").hover(function(){
    $("#d2").css({"border":"1px solid rgb(93,180,66)"});
  },
  function(){
    $("#d2").css({"border":"1px solid rgb(204,204,204)"});
  });

  $("#a3").hover(function(){
    $("#d3").css({"border":"1px solid rgb(93,180,66)"});
  },
  function(){
    $("#d3").css({"border":"1px solid rgb(204,204,204)"});
  });


  /* ANIMATION EFFECTS */

  $('.anim1').hover(
    function(){
      $('.anim-t1').css({"position":"relative)"}).addClass('animated shake');
    },
    function(){
      $('.anim-t1').css({"position":"static)"}).removeClass('animated shake');
    }
  );

    $('.anim2').hover(
    function(){
      $('.anim-t2').css({"position":"relative)"}).addClass('animated shake');
    },
    function(){
      $('.anim-t2').css({"position":"static)"}).removeClass('animated shake');
    }
  );

  $(window).scroll(function() {
  $('.price').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).css({"visibility":"visible"}).addClass('animated bounceIn');
    }
  });
});

});