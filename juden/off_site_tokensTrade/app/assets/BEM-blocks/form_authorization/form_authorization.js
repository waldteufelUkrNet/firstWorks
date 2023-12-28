// $(document).ready(function(){

//   var isPasswordShow = false;
//   $('#togglePass').click(function(){

//     if (!isPasswordShow) {
//       var temp = $('#real-input').val();
//       $('#instead-input').val(temp);
//       $('#real-input').css({'display':'none'});
//       $('#instead-input').css({'display':'block'});
//       $('#togglePass svg').css({'color':'lightgreen'});
//       isPasswordShow = !isPasswordShow;
//       return;
//     }

//     if (isPasswordShow) {
//       var temp = $('#instead-input').val();
//       $('#real-input').val(temp);
//       $('#real-input').css({'display':'block'});
//       $('#instead-input').css({'display':'none'});
//       $('#togglePass svg').css({'color':'red'});
//       isPasswordShow = !isPasswordShow;
//       return;
//     }

//   });
// });
// $('#logIn').click(function(){
//    var dat = {
//       email: $('#emailForm').val(),
//       pass : $('#real-input').val()
//       };

//       $.ajax({
//       type: "GET",
//             data: dat,
//             url : "https://platform.investingcase.com/api/CheckLogin",
//       crossDomain:true,
//             success: function (data) {
//                console.log(data);
//          if(data=="Ok"){
//           location.href = 'https://platform.investingcase.com/Home/LoginSite?email='+dat.email+'&pass='+dat.pass
//          }else{
//            showAuthorisationInfoWarning();
//          }
//             }
//         });
// });
// function showAuthorisationInfoWarning () {
//   $('#password-info').css({'height': 'auto'});
//   var tempHeight = $('#password-info').css('height');
//   $('#password-info').css({'height': '0px'});
//   $('#password-info').css({'height': tempHeight,'transition':'height .5s'});
// }