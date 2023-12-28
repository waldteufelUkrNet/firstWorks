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

  var tempOpen = false;
  /* ↓↓↓ popups ↓↓↓ */
  $(document).mouseleave(function(event){
    if (event.clientY <= 0 && tempOpen == false) {
      // popup 1 - open
      $(".popup__cover").css({"display":"block"});
      $(".popup__massage").css({"display":"block"});
      tempOpen = true;
    };
  });

  // popup 2 - open
  $("#btn").click(function(){
    $(".popup2__cover").css({"display":"block"});
    $(".popup2__massage").css({"display":"block"});
  });

  // popups - close
  $(".close_btn").click(function(){
    $(".popup__cover").css({"display":"none"});
    $(".popup__massage").css({"display":"none"});
    $(".popup2__cover").css({"display":"none"});
    $(".popup2__massage").css({"display":"none"});
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



  // $(document).keypress(function(e){
  // 	if(e.charCode == 39 ||	e.charCode == 45 || e.charCode == 1025 || e.charCode == 1028 || e.charCode == 1030 || e.charCode == 1031 || e.charCode >= 65 && e.charCode <=90 || e.charCode >= 97 && e.charCode <=122 ||	e.charCode >= 1040 && e.charCode <=1105 || e.charCode >= 1108 && e.charCode <=1111){console.log(e.charCode)};
  // });

/*if(	e.charCode = 39 ||
			e.charCode = 45 ||
			e.charCode = 1025 ||
			e.charCode = 1028 ||
			e.charCode = 1030 ||
			e.charCode = 1031 ||
			e.charCode >= 65 && e.charCode <=90 ||
			e.charCode >= 97 && e.charCode <=122 ||
			e.charCode >= 1040 && e.charCode <=1105 ||
			e.charCode >= 1108 && e.charCode <=1111
			)
39 45 65-90 97-122 1025 1028 1030 1031 1040-1105 1108-1111
*/
});