$(document).ready(function(){

  var isPasswordShow = false;
  $('#togglePass').click(function(){

    if (!isPasswordShow) {
      var temp = $('#real-input').val();
      $('#instead-input').val(temp);
      $('#real-input').css({'display':'none'});
      $('#instead-input').css({'display':'block'});
      $('#togglePass svg').css({'color':'lightgreen'});
      isPasswordShow = !isPasswordShow;
      return;
    }

    if (isPasswordShow) {
      var temp = $('#instead-input').val();
      $('#real-input').val(temp);
      $('#real-input').css({'display':'block'});
      $('#instead-input').css({'display':'none'});
      $('#togglePass svg').css({'color':'red'});
      isPasswordShow = !isPasswordShow;
      return;
    }

  });
});