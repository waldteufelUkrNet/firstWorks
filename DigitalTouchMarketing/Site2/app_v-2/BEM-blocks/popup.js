$(document).ready(function(){
	$(document).mouseleave(function(event){

		// popup 1 - open
	  if (event.clientY < 0) {
			if (0 <= window.pageYOffset && window.pageYOffset < document.body.scrollHeight*.8) {
				$(".popup__cover").css({"display":"block"});
				$(".popup__massage").css({"display":"block"});
			}
		// popup 2 - open
			if (document.body.scrollHeight*.8 < window.pageYOffset) {
				$(".popup2__cover").css({"display":"block"});
				$(".popup2__massage").css({"display":"block"});
			}
		}
	});

	// popup 1 - button click
	$(".popup1__btn").click(function(e){
		e.preventDefault();
    var inputArr = document.querySelectorAll(".popup-form1 input");
    var codeVal = $("#country1").val();
    for (var i = 0; i < inputArr.length; i++) {
      if (!inputArr[i].value || !typeof(codeVal) == 'number') {
        return
      }
    }
		window.location.replace("thanks.html");
	});

	// popup 2 - button click
	$(".popup2__btn").click(function(e){
		e.preventDefault();
    var inputArr = document.querySelectorAll(".popup-form2 input");
    var codeVal = $("#country2").val();
    for (var i = 0; i < inputArr.length; i++) {
      if (!inputArr[i].value || !typeof(codeVal) == 'number') {
        return
      }
    }
    alert(typeof(codeVal));
		window.location.replace("thanks.html");
	});


	// popups - close
	$(".close_btn").click(function(){
		$(".popup__cover").css({"display":"none"});
		$(".popup__massage").css({"display":"none"});
		$(".popup2__cover").css({"display":"none"});
		$(".popup2__massage").css({"display":"none"});
	});
		if (document.body.scrollHeight*.8 < window.pageYOffset) {
			$(".popup2__cover").css({"display":"block"});
			$(".popup2__massage").css({"display":"block"});
		}


});