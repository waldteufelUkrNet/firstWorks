$(document).ready(function(){
  $('#btn-plus').click(function(){
    $('#toggle-area1').addClass('section2__toggle-area_active');
    $('#toggle-area2').removeClass('section2__toggle-area_active');
    $('#btn-plus').addClass('section2__btn_active');
    $('#btn-minus').removeClass('section2__btn_active');
  });
  $('#btn-minus').click(function(){
    $('#toggle-area1').removeClass('section2__toggle-area_active');
    $('#toggle-area2').addClass('section2__toggle-area_active');
    $('#btn-plus').removeClass('section2__btn_active');
    $('#btn-minus').addClass('section2__btn_active');
  });
});