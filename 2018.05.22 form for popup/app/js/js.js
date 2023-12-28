  /* ↓↓↓ phone inputs - only for numbers ↓↓↓ */
  $('#popup-form-phone').keypress(function(e){
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
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
  /* ↑↑↑ /phone inputs - only for numbers ↑↑↑ */

$('button[type="submit"]').click(function(e){

  if ($('#popup-form-fname').val() == 0) {
    e.preventDefault();
    $("label[for='popup-form-fname']").css({'border-left':'6px solid red',
    																				'padding-left':'6px',
    																				'background-color':'rgba(255,0,0,.1)'})
    																	.text('Введите имя!');
  }

  if ($('#popup-form-lname').val() == 0) {
    e.preventDefault();
    $("label[for='popup-form-lname']").css({'border-left':'6px solid red',
    																				'padding-left':'6px',
    																				'background-color':'rgba(255,0,0,.1)'})
    																	.text('Введите фамилию!');
  }

  var temp = $('#popup-form-email').val();
  if (temp.indexOf('@') <= 0 || temp.indexOf('@') > temp.lastIndexOf('.')) {
    e.preventDefault();
    $("label[for='popup-form-email']").css({'border-left':'6px solid red',
    																				'padding-left':'6px',
    																				'background-color':'rgba(255,0,0,.1)'})
    																	.text('Введите почту!');
  }

  if ($('#popup-form-phone').val().length < 12) {
    e.preventDefault();
    $("label[for='popup-form-phone']").css({'border-left':'6px solid red',
    																				'padding-left':'6px',
    																				'background-color':'rgba(255,0,0,.1)'})
    																	.text('Введите телефон!');
  }

});

$('#popup-form-fname').change(function(){
	if ($('#popup-form-fname').val().length > 0) {
    $("label[for='popup-form-fname']").css({'border-left':'none',
    																				'padding-left':'0px',
    																				'background-color':'rgba(255,0,0,.0)'})
    																	.text('Ваше имя:');
	}
});
$('#popup-form-lname').change(function(){
	if ($('#popup-form-lname').val().length > 0) {
    $("label[for='popup-form-lname']").css({'border-left':'none',
    																				'padding-left':'0px',
    																				'background-color':'rgba(255,0,0,.0)'})
    																	.text('Ваше имя:');
	}
});
$('#popup-form-email').change(function(){
  var temp = $('#popup-form-email').val();
  if (temp.indexOf('@') > 0 && temp.indexOf('@') < temp.lastIndexOf('.')) {
    $("label[for='popup-form-fname']").css({'border-left':'none',
                                            'padding-left':'0px',
                                            'background-color':'rgba(255,0,0,.0)'})
                                      .text('Ваша почта:');
  }
});
$('#popup-form-phone').change(function(){
	if ($('#popup-form-phone').val().length >= 12) {
    $("label[for='popup-form-phone']").css({'border-left':'none',
    																				'padding-left':'0px',
    																				'background-color':'rgba(255,0,0,.0)'})
    																	.text('Ваше имя:');
	}
});