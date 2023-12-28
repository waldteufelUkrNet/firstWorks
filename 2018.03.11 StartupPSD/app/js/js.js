$(document).ready(function(){

  // this is for animation
  new WOW().init();

  /* ↓↓↓ NAVIGATION (nav-btn's) ↓↓↓ */
  var navLinkArr = $(".nav-list-link");

  $(".nav-btn-open").click(function(){
    $(this).css({"transition":".5s","opacity":"0","zIndex":"-1"});
    $(".navigation").css({"transition":".5s","transition-delay":".5s","top":"0"});

    $(navLinkArr).css({"left":"-100%"});

    setTimeout( function(){
      $(navLinkArr[0]).css({"transition":".2s","transition-delay":".0s","left":"0%"});
      $(navLinkArr[1]).css({"transition":".2s","transition-delay":".1s","left":"0%"});
      $(navLinkArr[2]).css({"transition":".2s","transition-delay":".2s","left":"0%"});
      $(navLinkArr[3]).css({"transition":".2s","transition-delay":".3s","left":"0%"});
      $(navLinkArr[4]).css({"transition":".2s","transition-delay":".4s","left":"0%"});
      $(navLinkArr[5]).css({"transition":".2s","transition-delay":".5s","left":"0%"});
      $(navLinkArr[6]).css({"transition":".2s","transition-delay":".6s","left":"0%"});
    }, 1000);

    $(".nav-btn-close").css({"transition":".5s","transition-delay":".5s","opacity":"1","zIndex":"0"});

    setInterval(function(){
      var controlWidth = $(window).width();
      if (controlWidth >= 768) {location.reload();}
    }, 500)

  });

  $(".nav-btn-close").click(function(){
    $(this).css({"transition":".5s","opacity":"0","zIndex":"-1"});

    setTimeout( function(){
      $(navLinkArr[0]).css({"transition":".2s","transition-delay":".0s","left":"100%"});
      $(navLinkArr[1]).css({"transition":".2s","transition-delay":".1s","left":"100%"});
      $(navLinkArr[2]).css({"transition":".2s","transition-delay":".2s","left":"100%"});
      $(navLinkArr[3]).css({"transition":".2s","transition-delay":".3s","left":"100%"});
      $(navLinkArr[4]).css({"transition":".2s","transition-delay":".4s","left":"100%"});
      $(navLinkArr[5]).css({"transition":".2s","transition-delay":".5s","left":"100%"});
      $(navLinkArr[6]).css({"transition":".2s","transition-delay":".6s","left":"100%"});
    }, 500);

    $(".navigation").css({"transition":".5s","transition-delay":"1.1s","top":"-330px"});

    setTimeout( function(){
      $(".nav-btn-open").css({"opacity":"1","zIndex":"0"});
      $(navLinkArr).css({"left":"-100%"});

    }, 1600);

  });
  /* ↑↑↑ /NAVIGATION (nav-btn's) ↑↑↑ */

  /* ↓↓↓ SECTION 3 about (slick carousell) ↓↓↓ */
  $('.about-slick').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  /* ↑↑↑ /SECTION 3 about (slick carousell) ↑↑↑ */

  /* ↓↓↓ SECTION 4 works (choice behavior) ↓↓↓ */
  $('.choice').click(function() {
      var choice = $(this).attr("data-choice");
      var arrOfWorks = $(".work-card");
      for (var i =  0; i < arrOfWorks.length; i++) {
        var attr = $(arrOfWorks[i]).attr("data-choice");
        $(arrOfWorks[i]).css({"display":"block"});
        if (attr != choice) {
          $(arrOfWorks[i]).css({"display":"none"});
        }
        if (choice == "all") {
          $(arrOfWorks[i]).css({"display":"block"});
        }
        console.log(attr);
      }
    }
  );
  /* ↑↑↑ /SECTION 4 works (choice behavior) ↑↑↑ */

  /* ↓↓↓ SECTION 5 question (parallax) ↓↓↓ */
    var wS = $(window).scrollTop();
    var wH = $(window).height();
    var cT = $(".parallax-container").offset().top;
    var cH = $(".parallax-container").innerHeight();
    var iH = $(".parallax-item").innerHeight();

    var deltaS = +((wH + cH)/(iH - cH)).toFixed(3); 
    var startWS = cT - wH;

  $(window).scroll(function(){

     wS = $(window).scrollTop();

    if(wS > cT - wH && wS < cH + cT) {

      var curSE = parseInt((wS - cT + wH)/deltaS);
      var translate = "translate(-50%,-" + curSE + "px)";
      $(".parallax-item").css({
        "transform": translate
     });
    }
  });
  /* ↑↑↑ /SECTION 5 question (parallax) ↑↑↑ */

  /* ↓↓↓ SECTION 7 partners (slick carousell) ↓↓↓ */
  $('.partners-slick').slick({  
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    pauseOnFocus: false,
    slidesToShow: 1
  });
  /* ↑↑↑ /SECTION 7 partners (slick carousell) ↑↑↑ */

  /* ↓↓↓ SECTION 8 form (play with placeholder) ↓↓↓ */
  var tempPlaceholderValue;
  $('input[type="text"]').focus(function() {
    tempPlaceholderValue = $(this).attr("placeholder");
    console.log(tempPlaceholderValue);
    $(this).attr("placeholder", "");
  });
  $('input[type="text"]').blur(function() {
    if ($(this).attr("placeholder") == "") {
      $(this).attr("placeholder", tempPlaceholderValue);
    }
  });

  $('textarea').focus(function() {
    tempPlaceholderValue = $(this).attr("placeholder");
    console.log(tempPlaceholderValue);
    $(this).attr("placeholder", "");
  });

  $('textarea').blur(function() {
    if ($(this).attr("placeholder") == "") {
      $(this).attr("placeholder", tempPlaceholderValue);
    }
  });
  /* ↑↑↑ /SECTION 8 form (play with placeholder) ↑↑↑ */

});