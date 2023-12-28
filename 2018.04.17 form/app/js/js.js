$(document).ready(function(){

  // this is for animation
  new WOW().init();

  /* ↓↓↓ menu button ↓↓↓ */

  var isMenuOpen = false;
  var navUlWidth;
  // control body's widtch
  var body = document.body;
  var bodyWidth = body.offsetWidth;

  setInterval(function() {
    bodyWidth = body.offsetWidth;
    if (isMenuOpen == true) {
      if (bodyWidth > 1201) {
        $(".navigation ul").css("width","1022");
        isMenuOpen = false;
        location.reload();
      }
    }
    if (bodyWidth > 1201 && !isMenuOpen) {
      $(".navigation ul").css("width","1022");
    }
    if (bodyWidth < 1201 && !isMenuOpen) {
      $(".navigation ul").css("width","0");
    }
  }, 100);


  // open/close navigation
  $("#nav-btn").click(function(){

    if (isMenuOpen == true) {
      $(".navigation ul").animate({"width":"0"});
      isMenuOpen = false;
      return;
    };

    if (isMenuOpen == false) {
      $(".navigation ul").animate({"width":"250"});
      isMenuOpen = true;
      return;
    };

  });

  /* ↑↑↑ /menu button ↑↑↑ */

  /* ↓↓↓ slick carousell ↓↓↓ */

  $('.slick').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  });

  /* ↑↑↑ /slick carousell ↑↑↑ */
  
});