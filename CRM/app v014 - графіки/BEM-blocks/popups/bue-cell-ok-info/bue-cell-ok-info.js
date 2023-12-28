$(document).ready(function(){

  // поява
  $('.btn-bue, .btn-cell').click(function(){

    $('.bue-cell-ok-info__positioning-wrapper').css({'z-index':'9988','background-color':'rgba(255,255,255,.5'});

    $('.bue-cell-ok-info').css({'transition':'top .2s','top':'50%'});

    setTimeout(function(){
      $('.bue-cell-ok-info').css({'transition':'width .3s','width':'400px'});
    },200);

    setTimeout(function(){
      $('.bue-cell-ok-info').css({'transition':'height .3s','height':'162px'});
      $('.bue-cell-ok-info__info-string').css({'display':'block'});
      $('.bue-cell-ok-info__close-btn-ok').css({'display':'block'});
    },500);

    setTimeout(function(){
      $('.bue-cell-ok-info__info-string').css({'opacity':'1'});
      $('.bue-cell-ok-info__close-btn-ok').css({'bottom':'20px'});
    },800);

    setTimeout(function(){
      $('.bue-cell-ok-info__close-btn').css({'transition':'.5s','transform':'rotate(180deg)'});
      $('.bue-cell-ok-info__close-btn-line1, .bue-cell-ok-info__close-btn-line2').css({'transition':'width .5s','width':'24px'});
    },1100);

  });

  // закриття
  $('.bue-cell-ok-info__close-btn, .bue-cell-ok-info__close-btn-ok ').click(function(){
    $('.bue-cell-ok-info__close-btn-ok').css({'display':'none','bottom':'-30px'});
    $('.bue-cell-ok-info__info-string').css({'display':'none','opacity':'0'});

    setTimeout(function(){
      $('.bue-cell-ok-info__close-btn').css({'transition':'.5s','transform':'rotate(0deg)'});
      $('.bue-cell-ok-info__close-btn-line1, .bue-cell-ok-info__close-btn-line2').css({'transition':'width .5s','width':'0px'});
    },300);

    setTimeout(function(){
      $('.bue-cell-ok-info').css({'transition':'height .3s','height':'20px'});
    },800);

    setTimeout(function(){
      $('.bue-cell-ok-info').css({'transition':'width .3s','width':'120px'});
    },1100);

    setTimeout(function(){
      $('.bue-cell-ok-info').css({'transition':'top .2s','top':'-10%'});
      $('.bue-cell-ok-info__positioning-wrapper').css({'transition':'background-color .5s','z-index':'-1','background-color':'rgba(0,0,0,0'});
    },1400);
  });

});