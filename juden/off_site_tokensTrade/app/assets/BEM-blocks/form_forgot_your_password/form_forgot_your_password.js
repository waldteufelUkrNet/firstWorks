var flag = false;

$('#fogotPass').click(function(){
   var dat = {
      email: $('#emailFogot').val()
      };
      $.ajax({
            url: "https://platform.investingcase.com/api/PassReset",
            type: "GET",
            data: dat,
            success: function (data) {
        if(data==1){
          flag=true;
          showForgotYourPasswordInfo();
        }else{
           showForgotYourPasswordInfo();
        }
            }
        });
});
function showForgotYourPasswordInfo () {
  if (flag) {
  $('.forgot-your-pass-info:eq(0)').css({'height': 'auto'});
  var tempHeight = $('.forgot-your-pass-info:eq(0)').css('height');
  $('.forgot-your-pass-info:eq(0)').css({'height': '0px'});
  $('.forgot-your-pass-info:eq(0)').css({'height': tempHeight,'transition':'height .5s'});
  } else {
  $('.forgot-your-pass-info:eq(1)').css({'height': 'auto'});
  var tempHeight = $('.forgot-your-pass-info:eq(1)').css('height');
  $('.forgot-your-pass-info:eq(1)').css({'height': '0px'});
  $('.forgot-your-pass-info:eq(1)').css({'height': tempHeight,'transition':'height .5s'});
  }
};