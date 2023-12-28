$(document).ready(function(){

  // this is for animation
  new WOW().init();

  // variables for buttons
  var isSearchOpen = false;
  var isMenuOpen = false;

  // control body's widtch
  var body = document.body;
  var bodyWidth = body.offsetWidth;

  setInterval(function() {
    if (isMenuOpen == true) {
      bodyWidth = body.offsetWidth;
      if (bodyWidth > 991) {
        $(".header").css({"height":"102"});
        isMenuOpen = false;
      }
    }
  }, 500);

  // open/close navigation
  $("#nav-btn").click(function(){

    if (isMenuOpen == true) {
      $(".header").animate({"height":"102"});
      isMenuOpen = false;
      return;
    };

    if (isMenuOpen == false) {
      $(".header").animate({"height":"380"});
      isMenuOpen = true;
      return;
    };

  });

  // open search field
  $("#search-btn").click(function(){
    $(".search-field").css({"border-color":"rgb(0,169,157) "});
    $(".search-field input").css("border-color","rgb(0,169,157) transparent rgb(0,169,157) rgb(0,169,157)").animate({"width":"270px"});
    isSearchOpen = true;
  });

  // close navigation/search field
  document.onclick = function(event) {

    if (event.target.parentElement.className !== "search-field"
            && event.target.id !== "search-btn"
            && isSearchOpen == true) {
      $(".search-field input").animate({"width":"0px"});
      isSearchOpen == false;
      setTimeout(function() {
        $(".search-field").css({"border-color":"transparent"});
        $(".search-field input").css({"border-color":"transparent"});
      }, 500)
    }

    /*if (isMenuOpen == true && event.target.id !== "nav-btn") {
      $(".header").animate({"height":"102"});
    }*/
  }

  // slick carousells

  $('.slick1').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnFocus: false,
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
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }      
    }
  ]
  });

  $('.slick2').slick({
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnFocus: false,
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
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }      
    }
  ]
  });

});