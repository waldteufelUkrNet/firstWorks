$(document).ready(function(){
  /* ↓↓↓ select bahavior ↓↓↓ */
	var arr = [];
	$('.popup-form-select__add').click(function(){
		var tempValue = $(this).prev('select').val();
		if (tempValue != 0) {
			for (var i = 0; i < arr.length; i++) {
				if (tempValue == arr[i]) {
					$(this).prev('select').val(0);
					return;
				}
			}
			arr.push(tempValue);
			var tempContent = "<div class='popup-form-temp-div'>"
			                + "<input type='text'disabled class='popup-form-temp-class'"
			                + " value='"
			                + tempValue
			                + "'><button type='button' class='popup-form-temp-btn' "
			                + " onclick = '$(this).parent().remove()'><i class='fas fa-times'> "
			                + " </i></button></div>";
			$(this).prev('select').val(0);
			$(this).prev('select').before(tempContent);
		}
	});
  /* ↑↑↑ /select bahavior ↑↑↑ */

  /* ↓↓↓ iphone input - only for numbers ↓↓↓ */
  $('#popup-form-iphone').keypress(function(e){
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
  /* ↑↑↑ /iphone input - only for numbers ↑↑↑ */

  /* ↓↓↓ /form validation ↓↓↓ */
  $('#coworker-form-submit').click(function(e){
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

  /* ↑↑↑ /form validation ↑↑↑ */

});