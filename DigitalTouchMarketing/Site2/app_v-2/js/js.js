$(document).ready(function(){

  /* ↓↓↓ prevent close ↓↓↓ */
  // window.onbeforeunload = function() {
  //   return "Оставайтесь с нами! У нас еще много интересного!";
  // };
  /* ↑↑↑ /prevent close ↑↑↑ */
  
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
});