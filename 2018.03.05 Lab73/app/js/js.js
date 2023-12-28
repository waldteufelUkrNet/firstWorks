$(document).ready(function(){

  // this is for animation
  new WOW().init();


  /* ↓↓↓ menu button ↓↓↓ */
  
  var isMenuButtonClicked = false;
  $(".nav-btn").on("click", function(){

    var windowWidth = $(window).width();
    var smallMenuOn = bigMenuOn = false;

    if(!isMenuButtonClicked) {
      changeMenuBtn("off");
      if (windowWidth >= 577) {openBigMenu();}
      if (windowWidth < 577) {openSmallMenu();}

      isMenuButtonClicked = true;
      return
    }

    setInterval( function(){
      var controlWindowWidth = $(window).width();
      if(controlWindowWidth != windowWidth) {
        closeBigMenu();
        closeSmallMenu();
        changeMenuBtn("on");
        windowWidth = $(window).width();
        return}
    }, 100);

    if(isMenuButtonClicked) {
      changeMenuBtn("on");
      if (windowWidth >= 577) {closeBigMenu();}
      if (windowWidth < 577) {closeSmallMenu();}

      isMenuButtonClicked = false;
    }

  });

  function changeMenuBtn(arg) { /*  ☰ <-> ×  */
    if(arg == "off") {
      /*  ☰ -> ×  */
      $(".bar-1").css({"transform":"rotate(-45deg) translate(-5px, 5px)"});
      $(".bar-2").css({"opacity":"0"});
      $(".bar-3").css({"transform":"rotate(45deg) translate(-5px, -5px)"});
      return;
    }
    if(arg == "on") {
      /*  × -> ☰  */
      $(".bar-1").css({"transform":"rotate(0deg) translate(0px, 0px)"});
      $(".bar-2").css({"opacity":"1"});
      $(".bar-3").css({"transform":"rotate(0deg) translate(0px, 0px)"});
    }
  }

  function openBigMenu(){
    bigMenuOn = true;
    /* ↓↓↓ bg on ↓↓↓ */
    $(".big-menu-bg").css({"height":"100vh"}).animate({"opacity":"1"}, 1000);
    $(".big-menu-cover").css({"width":"100vw"}).animate({"opacity":"1"}, 1000);
    /* ↑↑↑ bg on ↑↑↑ */

    /* ↓↓↓ bg image on ↓↓↓ */
    setTimeout(function() {
      $(".big-menu-image").animate({"opacity":"1"});
      $(".big-menu-image-holder").css({"opacity":"1"}).animate({"left":"0%"},1000);
    }, 1000);
    /* ↑↑↑ bg image on ↑↑↑ */

    /* ↓↓↓ show menu items ↓↓↓ */
    setTimeout(function() {
      var temtArr = $(".nav-list__item");
      $(temtArr[0]).animate({"opacity":"1", "left":"0"},500);
      $(temtArr[1]).animate({"opacity":"1", "left":"0"},1000);
      $(temtArr[2]).animate({"opacity":"1", "left":"0"},1500);
      $(temtArr[3]).animate({"opacity":"1", "left":"0"},2000)
    }, 3000);
    /* ↑↑↑ show menu items ↑↑↑ */
  }

  function openSmallMenu(){
    smallMenuOn = true;
    $(".logo").animate({"opacity":"0"}, 1000);
    setTimeout(function(){
      $(".logo-menu").animate({"opacity":"1"}, 1000);
    }, 1000);
    setTimeout(function(){
      $(".logo-small").css({"transition":"transform 1s", "transform":"translate3d(0, 42px, 0)"});
    }, 1000);
    setTimeout(function(){
      $(".small-nav-list").css({"opacity":"1","height":"0px"}).animate({"height":"165px"}, 1000);
    }, 2000);

    var tempArr = $(".small-nav-list__item");
    setTimeout(function(){
      $(tempArr[0]).animate({"opacity":"1"}, 1000);
    }, 3000);
    setTimeout(function(){
      $(tempArr[1]).animate({"opacity":"1"}, 1000);
    }, 3500);
    setTimeout(function(){
      $(tempArr[2]).animate({"opacity":"1"}, 1000);
    }, 4000);
  }

  function closeBigMenu() {
    bigMenuOn = false;
    /* ↓↓↓ bg off ↓↓↓ */
    $(".big-menu-bg").animate({"opacity":"0"}, 1000);
    $(".big-menu-cover").animate({"opacity":"0"}, 1000);
    setTimeout(function() {
      $(".big-menu-bg").css({"height":"0vh"});
      $(".big-menu-cover").css({"width":"0vw"});
    }, 1500);
    /* ↑↑↑ bg off ↑↑↑ */

    /* ↓↓↓ bg image off ↓↓↓ */
    $(".big-menu-image").animate({"opacity":"0"},500);
    setTimeout(function() {
      $(".big-menu-image-holder").animate({"opacity":"0"},1000).css({"left":"-100%"});
    }, 1000);
    /* ↑↑↑ bg image off ↑↑↑ */

    /* ↓↓↓ hide menu items ↓↓↓ */
      var temtArr = $(".nav-list__item");
      $(temtArr[0]).animate({"opacity":"0"},1000);
      $(temtArr[1]).animate({"opacity":"0"},1000);
      $(temtArr[2]).animate({"opacity":"0"},1000);
      $(temtArr[3]).animate({"opacity":"0"},1000);

      setTimeout(function() {
        $(temtArr[0]).css({"left":"-100%"});
        $(temtArr[1]).css({"left":"-100%"});
        $(temtArr[2]).css({"left":"-100%"});
        $(temtArr[3]).css({"left":"-100%"})
      }, 1000);
    /* ↑↑↑ hide menu items ↑↑↑ */
  }

  function closeSmallMenu() {
    smallMenuOn = false;
    var tempArr = $(".small-nav-list__item");
    $(tempArr[0]).animate({"opacity":"0"}, 1000);
    $(tempArr[1]).animate({"opacity":"0"}, 1000);
    $(tempArr[2]).animate({"opacity":"0"}, 1000);
    $(".small-nav-list").animate({"opacity":"0"}, 1000);
    setTimeout(function(){
      $(".logo-small").css({"transition":"transform 1s", "transform":"translate3d(0, -30px, 0)"});
    }, 1000);
    $(".logo-menu").animate({"opacity":"0"}, 1000);
    setTimeout(function(){
      $(".logo").animate({"opacity":"1"}, 1000);
    }, 1000);
  }

  /* ↑↑↑ /menu button ↑↑↑ */


  /* ↓↓↓ section-item-1 animation ↓↓↓ */
  setTimeout(function() {
    $(".section-item-1__line").animate({width:"433px"}, "slow");
  }, 1500);
  /* ↑↑↑ section-item-1 animation ↑↑↑ */


  /* ↓↓↓ section-item-2 animation (parallax) ↓↓↓ */
  setTimeout(function() {
    $(".parallax-container").on("mousemove", function(event) {
      var w = $(window).width();
      var h = $(window).height();
      var offsetX = 0.5 - event.pageX / w;
      var offsetY = 0.5 - event.pageY / h;
      $(".parallax-item").each(function(i,el) {
        var offset = parseInt($(el).data("offset"));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," +
                        Math.round(offsetY * offset) + "px, 0px)";
        $(el).css({"transform": translate});
      })
    })
  }, 3500);
  /* ↑↑↑ section-item-2 animation (parallax) ↑↑↑ */


  /* ↓↓↓ section-item-3/4 animation (click on button) ↓↓↓ */
  $(".btn").click(function(){

    var headerWidth = $(".header").width();
    var logoTranslate = parseInt((headerWidth/2) - 100);
    var logoTranslate = 'translate(' + logoTranslate + 'px)';
    $(".logo").css({"position":"relative", "transition":"transform 1s", "transform":logoTranslate});

    var tempArr2 = $(".btn");
    $(tempArr2[0]).css({"transform":"translate(0px, -1500px) rotate(-30deg)"});
    $(tempArr2[1]).css({"transform":"translate(0px, -1500px) rotate(30deg)"});
    var tempArr = $(".parallax-item");
    $(tempArr[0]).css({"transform":"translate(0px, -1500px) rotate(30deg)"});
    $(".desctop-video").css({"transform":"translate(0px, -1500px) rotate(30deg)"});

    $(".section1__header").css({"position":"relative", "transition":"transform .5s", "transform":"translate3d(0, -100%, 0)"});
    setTimeout(function() {
      $(".section1__header").css({"transition":"transform 1s", "transform":"translate3d(0, -200%, 0)"});
    }, 500);
    
    $(".navigation").css({"position":"relative", "transition":"transform .5s", "transform":"translate3d(0, -100%, 0)"});
    setTimeout(function() {
      $(".navigation").css({"transition":"transform 1s", "transform":"translate3d(0, -200%, 0)"});
    }, 500);

    $(".section-item-1__info").css({"position":"relative", "transition":"transform .5s", "transform":"translate3d(0, -100%, 0)"});
    setTimeout(function() {
      $(".section-item-1__info").css({"transition":"transform 1s", "transform":"translate3d(0, 1000px, 0)"});
    }, 500);
    $(".section-item-1__info").css({"display":"none"});

    $(tempArr[1]).css({"position":"relative", "transition":"transform .5s", "transform":"translate3d(0, -100%, 0)"});
    setTimeout(function() {
      $(tempArr[1]).css({"transition":"transform 1s", "transform":"translate3d(0, 1200px, 0)"});
    }, 500);
    $(tempArr[1]).css({"display":"none"});

    $(tempArr[2]).css({"position":"relative", "transition":"transform .5s", "transform":"translate3d(0, -100%, 0)"});
    setTimeout(function() {
      $(tempArr[2]).css({"transition":"transform 1s", "transform":"translate3d(0, 1200px, 0)"});
    }, 500);
    $(tempArr[2]).css({"display":"none"});

    $(tempArr[3]).css({"position":"relative", "transition":"transform .5s", "transform":"translate3d(0, -100%, 0)"});
    setTimeout(function() {
      $(tempArr[3]).css({"transition":"transform 1s", "transform":"translate3d(0, 1200px, 0)"});
    }, 500);
    $(tempArr[3]).css({"display":"none"});

    setTimeout(function() {
      $(".section-item-1__line").css({"transition":"width 2s", "width":"0px"});
    }, 1000);
  });
  /* ↑↑↑ section-item-3/4 animation (click on button) ↑↑↑ */


  	/* ↓↓↓ smal devices ↓↓↓ */
    var y1, y2;

    $(window).mousedown(function(e){
      y1 = e.pageY;
    });
    $(window).mouseup(function(e){
      y2 = e.pageY;

      if((y1-y2) > 50  && $(window).width() <577) {
        $(".btn").attr("data-wow-delay",".1s");
        //$(".btn").removeClass("wow fadeInUp");
        $(".draw-to-bottom").css({"display":"none"});
        $(".section1").animate({"bottom":"500px"},2000);
      }
    });

    $(window).keyup(function(e){

      if(e.keyCode == "9" && $(window).width() <577) {
        $(".btn").attr("data-wow-delay",".1s");
        $(".draw-to-bottom").css({"display":"none"});
        $(".section1").animate({"bottom":"500px"},2000);
      }
    });
    /* ↑↑↑ smal devices ↑↑↑ */

});