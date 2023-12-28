$('.footer__form button').click(function(){
  // валідація пошти
  var tempEmail = $('#contact-form-email').val();
  if ( !isEmailValid(tempEmail) ) {

    $('#contact-form-email').css('border-color','red').focus();

    return
  }

  // валідація повідомлення
  var tempMessage = $('#contact-form-message').val();
  if ( tempMessage.length < 10 ) {

    $('#contact-form-message').css('border-color','red').focus();

    return
  }

  $('#contact-form-email').val('');
  $('#contact-form-message').val('');
  alert('your message has been sent');

});

// якщо пошта коректна - прибрати повідомлення
$('#contact-form-email').keyup(function(){
  var tempEmail = $('#contact-form-email').val();
  if ( isEmailValid(tempEmail) ) {
    $('#contact-form-email').css('border-color','grey');
  }
});

// якщо поле повідомлення не пусте - прибрати повідомлення
$('#contact-form-message').keyup(function(){
  var tempMessage = $('#contact-form-message').val();
  if ( tempMessage.length > 9 ) {
    $('#contact-form-message').css('border-color','grey');
  }
});

/* ↓↓↓ FUNCTIONS DECLARATIONS ↓↓↓ */

function isEmailValid (email) {

  // повинен бути 1 символ @
  var temp = calculateCharsInStr(email, '@');
  if ( temp != 1 ) return false;

  // повинен бути мінімум 1 символ .
  var temp = calculateCharsInStr(email, '.');
  if ( temp < 1 ) return false;

  // символи @ та . не повинні бути крайніми
  if ( email.charAt(0)  == '@' ||
       email.charAt(0)  == '.' ||
       email.charAt( email.length-1 ) == '@' ||
       email.charAt( email.length-1 ) == '.' ) return false;

  // комбінація символів @. не допустима
  if ( email.indexOf('@.') != -1 ) return false;

  // після символу @ обов'язково повинен бути символ .
  var tempArr = email.split('@');
  if ( tempArr[1].indexOf('.') == -1 ) return false

  return true
}

function calculateCharsInStr(str, char) {
  var pos = count = 0;
  while (true) {
    var foundPos = str.indexOf(char, pos);
    if (foundPos == -1) break;
    count++;
    pos = foundPos + 1;
  }
  return count;
}

/* ↑↑↑ /FUNCTIONS DECLARATIONS ↑↑↑ */