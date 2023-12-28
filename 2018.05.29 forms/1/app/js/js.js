$('#popup-form-bonus').keypress(function(e){
  e = e || event;
  //if (e.ctrlKey || e.altKey || e.metaKey) return;
  var chr = getChar(e);
  console.log("chr", chr, typeof(chr));
  var chrCode = e.charCode;
  console.log("chrCode", chrCode, typeof(chrCode));
  if (chr == null) return;
  if (chrCode < 43 || chrCode > 57) {
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

$('button[type="submit"]').click(function(e){
  if ($('#popup-form-bonus').val() == 0) {
    e.preventDefault();
    $('#val-info-bonus').css({'transition':'height .5s','height':'24px'});
  }
  if ($('#popup-form-description').val() == 0) {
    e.preventDefault();
    $('#val-info-description').css({'transition':'height .5s','height':'24px'});
  }
});

$('#popup-form-bonus').change(function(){
  if ($('#popup-form-bonus').val() != 0) {
    $('#val-info-bonus').css({'transition':'height .5s','height':'0px'});
  }
});
$('#popup-form-description').change(function(){
  if ($('#popup-form-description').val() != 0) {
    $('#val-info-description').css({'transition':'height .5s','height':'0px'});
  }
});