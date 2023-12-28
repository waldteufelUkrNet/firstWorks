$(document).ready(function(){

  var navLinkArr = $(".navigation__link");

  //відкриття меню
  $(".navigation__nav-btn_open").click(function(){

    //зникнення кнопки-гамбургера
    $(this).css({ "transition":".5s",
                  "opacity":"0",
                  "zIndex":"-1"});

    //поява меню (чорне тло)
    $(".navigation__list").css({  "transition":".5s",
                                  "transition-delay":".5s",
                                  "top":"0"});

    //поява пунктів меню
    $(navLinkArr).css({"position":"relative","left":"-100%"});
    setTimeout( function(){
      $(navLinkArr[0]).css({"transition":".2s","transition-delay":".0s","left":"0%"});
      $(navLinkArr[1]).css({"transition":".2s","transition-delay":".1s","left":"0%"});
      $(navLinkArr[2]).css({"transition":".2s","transition-delay":".2s","left":"0%"});
      $(navLinkArr[3]).css({"transition":".2s","transition-delay":".3s","left":"0%"});
      $(navLinkArr[4]).css({"transition":".2s","transition-delay":".4s","left":"0%"});
      $(navLinkArr[5]).css({"transition":".2s","transition-delay":".5s","left":"0%"});
      $(navLinkArr[6]).css({"transition":".2s","transition-delay":".6s","left":"0%"});
      $(navLinkArr[7]).css({"transition":".2s","transition-delay":".7s","left":"0%"});
    }, 1000);

    //поява кнопки-хрестика
    $(".navigation__nav-btn_close").css({ "transition":".5s",
                                          "transition-delay":".5s",
                                          "opacity":"1",
                                          "zIndex":"2233"});

  setInterval(function(){
      var controlWidth = $(window).width();
      if (controlWidth >= 768) {location.reload();}
    }, 500)

  });

  //закриття меню
  $(".navigation__nav-btn_close").click(function(){

    //зникнення кнопки-хрестика
    $(this).css({"transition":".5s","opacity":"0","zIndex":"-1"});

    //зникнення пунктів меню
    setTimeout( function(){
      $(navLinkArr[0]).css({"transition":".2s","transition-delay":".0s","left":"100%"});
      $(navLinkArr[1]).css({"transition":".2s","transition-delay":".1s","left":"100%"});
      $(navLinkArr[2]).css({"transition":".2s","transition-delay":".2s","left":"100%"});
      $(navLinkArr[3]).css({"transition":".2s","transition-delay":".3s","left":"100%"});
      $(navLinkArr[4]).css({"transition":".2s","transition-delay":".4s","left":"100%"});
      $(navLinkArr[5]).css({"transition":".2s","transition-delay":".5s","left":"100%"});
      $(navLinkArr[6]).css({"transition":".2s","transition-delay":".6s","left":"100%"});
      $(navLinkArr[7]).css({"transition":".2s","transition-delay":".7s","left":"100%"});
    }, 500);

    //зникнення меню (чорне тло)
    $(".navigation__list").css({"transition":"1.6s","transition-delay":"1.1s","top":"-320px"});

    setTimeout( function(){
      //поява кнопки-гамбургера
      $(".navigation__nav-btn_open").css({"opacity":"1","zIndex":"0"});
      $(navLinkArr).css({"left":"-100%"});

    }, 1600);

  });

});