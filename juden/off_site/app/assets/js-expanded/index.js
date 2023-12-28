$(document).ready(function(){

  /* ↓↓↓ section 4 - button & choice behavior ↓↓↓ */
  $(".section4__btn").click(function(){

    var arrOfButtons = $(".section4__btn");
    var arrOfCards   = $(".section4__card");
    var choice       = $(this).attr("data-choice");

    for (var i = 0; i < arrOfButtons.length; i++) {
      $(arrOfButtons[i]).removeClass("section4__btn_activ");
      $(this).addClass("section4__btn_activ");
    }

    for (var i = 0; i < arrOfCards.length; i++) {
      var attr = $(arrOfCards[i]).attr("data-choice");
      if (attr != choice) {
        $(arrOfCards[i]).css({"display":"none"});
      } else{
        $(arrOfCards[i]).css({"display":"block"});
      }
    }
  });
  /* ↑↑↑ /section 4 - button & choice behavior ↑↑↑ */

  /* ↓↓↓ section 8 - parallax ↓↓↓ */
  $('.s8-wrapper').parallax({
    imageSrc      : 'assets/img/s8.jpg',
    naturalWidth  : 1920,
    naturalHeight : 1281,
    speed         : 0.5,
    androidFix    : true,
    iosFix        : true
  });
  /* ↑↑↑ /section 8 - parallax ↑↑↑ */

  /* ↓↓↓ section 9 - increase of numbers ↓↓↓ */
  // window scroll watching - in section 11
  var s9_tempArr = $('.section9__number');
  var s9_tempItem_0 = $(s9_tempArr[0]);
  var s9_tempItem_1 = $(s9_tempArr[1]);
  var s9_tempItem_2 = $(s9_tempArr[2]);
  var s9_tempItem_3 = $(s9_tempArr[3]);

  var wasCounted;
  function startCount() {
    if (wasCounted) return;
    var tempNumberValue = 0;

    var timer = setInterval(function(){
      $(s9_tempItem_0).text(tempNumberValue);
      $(s9_tempItem_1).text(tempNumberValue);
      $(s9_tempItem_2).text(tempNumberValue);
      $(s9_tempItem_3).text(tempNumberValue);

      tempNumberValue += 31;

      if (tempNumberValue > $(s9_tempItem_0).attr('data-number')) {
        $(s9_tempItem_0).text($(s9_tempItem_0).attr('data-number'));
        var isCounted0 = true;
      };
      if (tempNumberValue > $(s9_tempItem_1).attr('data-number')) {
        $(s9_tempItem_1).text($(s9_tempItem_1).attr('data-number'));
        var isCounted1 = true;
      };
      if (tempNumberValue > $(s9_tempItem_2).attr('data-number')) {
        $(s9_tempItem_2).text($(s9_tempItem_2).attr('data-number'));
        var isCounted2 = true;
      };
      if (tempNumberValue > $(s9_tempItem_3).attr('data-number')) {
        $(s9_tempItem_3).text($(s9_tempItem_3).attr('data-number'));
        var isCounted3 = true;
      };

      if (isCounted0 && isCounted1 && isCounted2 && isCounted3) {
        clearInterval(timer);
      }
    },1);
    wasCounted = true;
  }
  /* ↑↑↑ /section 9 - increase of numbers ↑↑↑ */

  /* ↓↓↓ section 10 - accordion ↓↓↓ */
  $('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);

      $this.css({'background-color':'lightgrey','color':'black'});
      $this.children('.fa-chevron-down').css({'transform':'translate(0,-50%) rotate(0deg)'});
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);

      $('.toggle').css({'background-color':'lightgrey','color':'black'});
      $this.css({'background-color':'black','color':'white'});
      $('.toggle .fa-chevron-down').css({'transform':'translate(0,-50%) rotate(0deg)'});
      $this.children('.fa-chevron-down').css({'transform':'translate(0,-50%) rotate(180deg)','transition':'transform .5s'});
    }
  });
  /* ↑↑↑ /section 10 - accordion ↑↑↑ */

  /* ↓↓↓ section 11 - parallax ↓↓↓ */
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
      var translate = "translate(0px,-" + curSE + "px)";
      $(".parallax-item").css({
        "transform": translate
      });
    }

    var increatedNumbersPosition = document.getElementsByClassName('section9__number')[0].getBoundingClientRect().top;
    if (increatedNumbersPosition < wH) {
      startCount()
    }
  });
  /* ↑↑↑ /section 11 - parallax ↑↑↑ */
});