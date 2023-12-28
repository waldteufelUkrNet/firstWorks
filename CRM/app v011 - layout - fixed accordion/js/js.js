$(document).ready(function(){

  /* ↓↓↓ navigation datetimer ↓↓↓ */
  var datetimer = document.getElementById('nav-datetimer');

  setInterval(function() {
    var date = new Date();
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    var hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    var mn = date.getMinutes();
    if (mn < 10) mn = '0' + mn;

    var ss = date.getSeconds();
    if (ss < 10) ss = '0' + ss;

    datetimer.innerHTML = dd + "." + mm + "." + yy + "   " + hh + ":" + mn + ":" + ss;
  }, 1000);

  /* ↑↑↑ /navigation datetimer ↑↑↑ */

  /* ↓↓↓ accordion ↓↓↓ */

  $('.accordion a').click(function(e) {
    e.preventDefault();

    var arrOfLinks = $('.accordion a');
    for (var i = 0; i < arrOfLinks.length; i++) {                                            // визначаємо, де спрацьовує клік
      if (this == arrOfLinks[i]) {
        var THIS = i;
        console.log("THIS", THIS);
      }
    }

    if (!this.isOpen) {

      var linkHeight           = $('.accordion a').height() + 1;                             // висота одного посилання + 1px рамки
      var linkQuantity         = $(this).next('ul').children('li').length;                   // кількість посилань
      var tempHeight           = linkHeight * linkQuantity;                                  // сумарна висота посилань
      var parentHeight         = $(this).parent().parent().height();                         // поточна висота батька
      var newParentHeight      = tempHeight + parentHeight;                                  // нова висота батька із урахуванням висоти розкритої дитини
      var accordionHeight      = $('.accordion').height();
      var newAccordionHeight   = accordionHeight + tempHeight;

      for (var i = 0; i < arrOfLinks.length; i++) {                                          // проходимося циклом - усе закриваємо
        $(arrOfLinks[i]).css({'background-color':'#353535'});
        if ($(this).parent().parent().siblings('a').children('span').length > 0) {continue}; // щоб не рухався хрестик батька, поки син відкритий
        arrOfLinks[i].isOpen = false;
        $(arrOfLinks[i]).siblings('ul').css({'transition':'height .5s','height': '0px'});
        $(arrOfLinks[i]).children('span').css({'transition':'.5s','transform':'rotate(0deg)'});
      }

      $(this).css({'background-color':'black'});

      $('.accordion').css({'height': accordionHeight});
      $('.accordion').css({'transition':'.5s','height': newAccordionHeight});
      $(this).parent().parent().css({'transition':'.5s','height': newParentHeight});
      $(this).next('ul').css({'transition':'.5s','height': tempHeight});

      $(this).children('span').css({'transition':'.5s','transform':'rotate(45deg)'});

      arrOfLinks[THIS].isOpen = true;

      $(".aside").css({"min-height":"730px"});

      return;
    }

    if (this.isOpen) {

      var parentHeight    = $(this).parent().parent().height() - $(this).next('ul').height();
      var accordionHeight = $('.accordion').height() - $(this).next('ul').height();

      $(this).next('ul').css({'transition':'.5s','height': '0px'});
      $(this).parent().parent().css({'transition':'.5s','height': parentHeight});
      $('.accordion').css({'transition':'.5s','height': accordionHeight});
      $(this).siblings('ul').children('li').children('ul').css({'height': '0px'});

      $(this).children('span').css({'transition':'.5s','transform':'rotate(0deg)'});
      $(this).siblings('ul').children('li').children('a').children('span').css({'transition':'.5s','transform':'rotate(0deg)'});

      arrOfLinks[THIS].isOpen = false;
      arrOfLinks[21].isOpen = false;                                                         // не камільфо, але ситуацію рятує

      $(".aside").css({"min-height":"610px"});

      return;
    }

  });

// info
// при відкритті нижніх підпунктів пунктів меню висота бокової панелі
// не збільшувалася, менюшки, які не влазили в панель були не видимі,
// work-area також не доходила до низу вікна браузера. Тому був
// доданий код зі зміною висоти aside:
// $(".aside").css({"min-height":"nnnnnn"});

  /* ↑↑↑ /accordion ↑↑↑ */

});

