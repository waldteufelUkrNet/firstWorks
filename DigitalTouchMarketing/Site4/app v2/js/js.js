$(document).ready(function(){

  /* ↓↓↓ client date (for backend) ↓↓↓ */
  var d = new Date();
  var fullData = d.getFullYear() +
      "-" +
      d.getMonth() +
      1 +
      "-" +
      d.getDate() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();
  $('.DateTimeId').val(fullData);
  /* ↑↑↑ /client date (for backend) ↑↑↑ */

  /* ↓↓↓ background video speed ↓↓↓ */
  var vid = document.getElementById("bg-video");
  vid.playbackRate = 0.2; 
  /* ↑↑↑ /background video speed ↑↑↑ */

  /* ↓↓↓ bg-video speed ↓↓↓ */
    var vid = $("#bg-video");
    console.log(vid);
    vid.PlaybackRate = 0.5;
  /* ↑↑↑ /bg-video speed ↑↑↑ */

  /* ↓↓↓ popups ↓↓↓ */
  var tempOpen = false; // відкривався попап, чи ні
  $(document).mouseleave(function(event){
    if (event.clientY <= 0 && tempOpen == false) {
      // popup - open
      $(".popup__cover").css({"display":"block"});
      $(".popup__massage").css({"display":"block"});
      tempOpen = true;
    };
  });

  // popup - close
  $(".close_btn").click(function(){
    $(".popup__cover").css({"display":"none"});
    $(".popup__massage").css({"display":"none"});
  });

  // phone inputs - only for numbers
  $("input[name='Phone']").keypress(function(e){
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    // с null надо осторожно в неравенствах, т.к. например null >= '0' => true на всякий случай лучше вынести проверку chr == null отдельно
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

  $(".form__private").click(function(){
    $(".politics-cover").css({"display":"block","opacity":"1"});
  });
  $(".private-politics__close_btn").click(function(){
    $(".politics-cover").css({"opacity":"0","display":"none"});
  });
  /* ↑↑↑ /popups ↑↑↑ */

});