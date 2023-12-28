$(document).ready(function(){

  /* ↓↓↓ field switch ↓↓↓ */
  $('.act-btn').click(function(){
  	// buttons
  	$('.act-btn').addClass('work-change-btn_active');
  	$('.active-btn').removeClass('work-change-btn_active');
  	$('.history-btn').removeClass('work-change-btn_active');

  	//fields
  	$('.act-btn-field').css({'transition':'.5s','opacity':'1'}).css({'z-index':'1'});
  	$('.active-btn-field').css({'transition':'.5s','opacity':'0'}).css({'z-index':'-1'});
  	$('.history-btn-field').css({'transition':'.5s','opacity':'0'}).css({'z-index':'-1'});
  });

  $('.active-btn').click(function(){
  	// buttons
  	$('.act-btn').removeClass('work-change-btn_active');
  	$('.active-btn').addClass('work-change-btn_active');
  	$('.history-btn').removeClass('work-change-btn_active');

  	//fields
  	$('.act-btn-field').css({'transition':'.5s','opacity':'0'}).css({'z-index':'-1'});
  	$('.active-btn-field').css({'transition':'.5s','opacity':'1'}).css({'z-index':'1'});
  	$('.history-btn-field').css({'transition':'.5s','opacity':'0'}).css({'z-index':'-1'});
  });

  $('.history-btn').click(function(){
  	// buttons
  	$('.act-btn').removeClass('work-change-btn_active');
  	$('.active-btn').removeClass('work-change-btn_active');
  	$('.history-btn').addClass('work-change-btn_active');

  	//fields
  	$('.act-btn-field').css({'transition':'.5s','opacity':'0'}).css({'z-index':'-1'});
  	$('.active-btn-field').css({'transition':'.5s','opacity':'0'}).css({'z-index':'-1'});
  	$('.history-btn-field').css({'transition':'.5s','opacity':'1'}).css({'z-index':'1'});
  });
  /* ↑↑↑ /field switch ↑↑↑ */

  /* ↓↓↓ input - number filter ↓↓↓ */
  $('#investment, #SL, #TP').keypress(function(e){
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
      return false;
    }
    function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }
      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
      }
      return null; // специальная клавиша
    }
  });
  /* ↑↑↑ /input - number filter ↑↑↑ */

  /* ↓↓↓ onoff switcher ↓↓↓ */
  var onoffSwitcherToggle = 'off';
  $('.onoff-switcher__thumb').click(function(){
    if (onoffSwitcherToggle == 'off') {
      $('.onoff-switcher__thumb').css({'transition':'.5s','left':'35px'});
      onoffSwitcherToggle = 'on'

      $('.shoulder__body').css({'transition':'0.5s','height':'64px'});

      return
    }
    if (onoffSwitcherToggle == 'on') {
      $('.onoff-switcher__thumb').css({'transition':'.5s','left':'0px'});
      onoffSwitcherToggle = 'off'

      $('.shoulder__body').css({'transition':'.5s','height':'0px'});

      $('#investment-result').text('');
      $('#investment').val('');
      removeChangeShoulder ();

      return
    }
  });
  /* ↑↑↑ /onoff switcher ↑↑↑ */

  /* ↓↓↓ shoulder thumb ↓↓↓ */
  var arrOfPoints = $('.shoulder-point');
  var arrOfLines = $('.shoulder-line');
  var shoulderValue = 50;
  $(arrOfPoints).click(function (){
    for (var i = 0; i < arrOfPoints.length; i++) {
      if (arrOfPoints[i] == this) {
        changeShoulder(i);
      }
    }
  });
  function changeShoulder(arg) {
    removeChangeShoulder ();

    for (var i = 0; i <= arg; i++) {
      $(arrOfLines[i-1]).addClass('shoulder__subline_active');
      $(arrOfPoints[i-1]).addClass('shoulder__round_sub-active');
    }
    $(arrOfPoints[arg]).addClass('shoulder__round_active');
    shoulderValue = 50 * (i);
    multipleShoulder(shoulderValue);
  }

  function multipleShoulder(n) {
    var a = $('#investment').val();
    var b = a*n;
    $('#investment-result').text(b);
  }

  function removeChangeShoulder() {
    for (var i = 0; i < arrOfPoints.length; i++) {
      $(arrOfLines[i]).removeClass('shoulder__subline_active');
      $(arrOfPoints[i]).removeClass('shoulder__round_sub-active shoulder__round_active');
    }
    shoulderValue = 50;
    multipleShoulder(shoulderValue);
  }
  $('#investment').change(function(){
    multipleShoulder(shoulderValue);
  });
  /* ↑↑↑ /shoulder thumb ↑↑↑ */

  /* ↓↓↓ ACCORDION ↓↓↓ */
  var arrOfAcCon = $('.accordion-content');
  var arrOfAcBtn = $('.accordion-btn');

  $(arrOfAcBtn).click(function(){

    //where was click
    outer:
    for (var i = 0; i < arrOfAcBtn.length; i++) {
      if (arrOfAcBtn[i] == this) {
        var temp = i;
        break outer;
      }
    }

    //open accordion content + button animation
    if (arrOfAcCon[temp].isOpen) {
      $(arrOfAcCon[temp]).css({'transition':'height .5s','height':'0px'}).css({'border-width':'0px'});
      arrOfAcCon[temp].isOpen = false;

      $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({'transition':'width .5s','width':'0px'});
      setTimeout(function () {
        $(arrOfAcBtn[temp]).children('.accordion-btn__1-line').css({'height':'16px'});
        $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({'width':'16px'})
      }, 500);
      $(arrOfAcBtn[temp]).removeClass('accordion-btn_active');

      return
    }

    if (!arrOfAcCon[temp].isOpen) {
      for (var i = 0; i < arrOfAcCon.length; i++) {
        $(arrOfAcCon[i]).css({'transition':'height .5s','height':'0px'}).css({'border-width':'0px'});
        arrOfAcCon[i].isOpen = false;

        $(arrOfAcBtn[i]).children('.accordion-btn__1-line').css({'height':'16px'});
        $(arrOfAcBtn[i]).children('.accordion-btn__2-line').css({'width':'16px'})
        $(arrOfAcBtn[i]).removeClass('accordion-btn_active');
      }

      $(arrOfAcCon[temp]).css({'border-width':'1px'}).css({'transition':'height .5s','height':'214px'});
      arrOfAcCon[temp].isOpen = true;

      $(arrOfAcBtn[temp]).children('.accordion-btn__1-line').css({'transition':'height .5s','height':'0px'});
      $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({'transition':'width .5s','width':'0px'});
      setTimeout(function () {
        $(arrOfAcBtn[temp]).children('.accordion-btn__2-line').css({'width':'16px'})
      }, 500);
      $(arrOfAcBtn[temp]).addClass('accordion-btn_active');
    }

  });
  /* ↑↑↑ /ACCORDION ↑↑↑ */

});