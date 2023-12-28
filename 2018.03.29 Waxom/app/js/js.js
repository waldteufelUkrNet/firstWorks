$(document).ready(function(){

  // this is for animation
  new WOW().init();

  /* ↓↓↓ SECTION 1 (slider) ↓↓↓ */
  $('.s1-slick').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  });
  /* ↑↑↑ /SECTION 1 (slider) ↑↑↑ */

  /* ↓↓↓ SECTION 5 (button & choice behavior) ↓↓↓ */
  $(".a-btn").click(function(){
    var tempArr = $(".a-btn");
    for (var i = 0; i < tempArr.length; i++) {
      $(tempArr[i]).removeClass("a-btn_activ");
      $(this).addClass("a-btn_activ");
    }

    var choice = $(this).attr("data-choice");
    var arrOfCards = $(".project-card");
    var count = 0;

    $(".alert-message").remove();

    for (var i = 0; i < arrOfCards.length; i++) {
      var attr = $(arrOfCards[i]).attr("data-choice");
      $(arrOfCards[i]).css({"display":"block"});
      
      if (attr != choice) {
        $(arrOfCards[i]).css({"display":"none"});
        count++;
        if(count == arrOfCards.length && choice != "all") {
          var message = "<p class='alert-message'>No matches found</p>";
          $(".s5__section-nav").after(message);
        }
      }
      if (choice == "all") {
        $(arrOfCards[i]).css({"display":"block"});
      }
    }
  });
  /* ↑↑↑ /SECTION 5 (button & choice behavior) ↑↑↑ */

  /* ↓↓↓ SECTION 6 (parallax) ↓↓↓ */
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
  /* ↑↑↑ /SECTION 6 (parallax) ↑↑↑ */

  /* ↓↓↓ SECTION 6 (video) ↓↓↓ */
  $(".s6__video-btn").click(function(){
    $(".s6__video-holder").css({"display":"block"});
  });
  $(".s6__video-close").click(function(){
    $(".s6__video-holder").css({"display":"none"});
    $("#s6__video").trigger("pause");
  });
  /* ↑↑↑ /SECTION 6 (video) ↑↑↑ */

  /* ↓↓↓ SECTION 9 (slider) ↓↓↓ */
  $('.s9-slick').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  /* ↑↑↑ /SECTION 9 (slider) ↑↑↑ */

  /* ↓↓↓ SECTION 10 (parallax) ↓↓↓ */
  var wS2 = $(window).scrollTop();
  var wH2 = $(window).height();
  var cT2 = $(".parallax-container2").offset().top;
  var cH2 = $(".parallax-container2").innerHeight();
  var iH2 = $(".parallax-item2").innerHeight();

  var deltaS2 = +((wH2 + cH2)/(iH2 - cH2)).toFixed(3); 
  var startWS2 = cT2 - wH2;

  $(window).scroll(function(){

     wS2 = $(window).scrollTop();

    if(wS2 > cT2 - wH2 && wS2 < cH2 + cT2) {

      var curSE2 = parseInt((wS2 - cT2 + wH2)/deltaS2);
      var translate2 = "translate(-50%,-" + curSE2 + "px)";
      $(".parallax-item2").css({
        "transform": translate2
      });
    }
  });
  /* ↑↑↑ /SECTION 10 (parallax) ↑↑↑ */

});