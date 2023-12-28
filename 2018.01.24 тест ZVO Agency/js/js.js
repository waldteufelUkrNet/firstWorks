/* ↓↓↓ small menu button and arrows ↓↓↓ */

var nav = document.getElementsByClassName("navigation")[0];
var navBtn = document.getElementsByClassName("navigation__button")[0];
var navBtnSymb = navBtn.getElementsByClassName("fa-bars")[0];
var navMenu = document.getElementsByClassName("navigation__menu")[0];
var arrNavA = navMenu.getElementsByTagName("a");

var isPressed = false;

navBtn.onclick = function (event) {

	if (isPressed == false) {

		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

		navMenu.style.cssText = "	display: block;\
															position: absolute;\
															top: 86px;\
															left: 0;\
															width: 100%;\
															max-width: 497px;\
															height: 100%;\
															border: 1px solid rgb(156,156,156);\
															background-color: rgb(124,124,124);\
														";

		navBtnSymb.classList.remove("fa-bars");
		navBtnSymb.classList.add("fa-times");
		navBtnSymb.style.cssText =	"	display: block;\
																	position: absolute;\
																	top: 0px;\
																	left: 0;\
																	width: 497px;\
																	height: 86px;\
																	text-align: left;\
																	padding: 16px 20px;\
																	border: 1px solid rgb(156,156,156);\
																	background-color: rgb(124,124,124);\
																";


		var menu = document.getElementsByClassName("navigation__submenu");
		for (var i = 0; i < menu.length; i++) {
			var menuLi = menu[i].getElementsByTagName("li");
			for (var j = 0; j < menuLi.length; j++) {
				menuLi[j].style.display = "none";
			}
		}

		isPressed = true;
		return;
	};

	if (isPressed == true) {
		navMenu.style.display = "none";

		document.body.style.backgroundColor = "white";

		navBtnSymb.classList.remove("fa-times");
		navBtnSymb.classList.add("fa-bars");
		navBtnSymb.style.cssText = "display: inline-block;\
																height: 36px;\
																width: 31px;\
																border: none;\
																background-color: rgb(15,15,15);\
																font-size: 36px;\
																color: white;\
																padding: 0;\
																cursor: pointer;\
															";

		isPressed = false;
	};

}


/* ↑↑↑ small menu button and arrows ↑↑↑ */


/* ↓↓↓ big menu arrows ↓↓↓ */
var isOpen = false;																											// чи відкрите якесь меню?

document.onclick = function(event) {
	var targetEl = event.target;

	if (isPressed && event.clientX > 497) {																// блок малого меню: закриття меню при кліку поза меню
		navMenu.style.display = "none";

		document.body.style.backgroundColor = "white";

		navBtnSymb.classList.remove("fa-times");
		navBtnSymb.classList.add("fa-bars");
		navBtnSymb.style.cssText = "display: inline-block;\
																height: 36px;\
																width: 31px;\
																border: none;\
																background-color: rgb(15,15,15);\
																font-size: 36px;\
																color: white;\
																padding: 0;\
																cursor: pointer;\
															";

		isPressed = false;
	}
	openOrclose(targetEl);
}

function openOrclose(elem) {

	function toggle(argument) {																						// показ/приховування підпунктів меню
		var li = elem.closest("li");
		var menu = li.getElementsByClassName("navigation__submenu")[0];
		var menuLi = menu.getElementsByTagName("li");
		for (var i = 0; i < menuLi.length; i++) {
			menuLi[i].style.display = argument;
		}
	}

	if(isOpen == true && !elem.classList.contains("fa-angle-up")) {				// якщо якесь меню відкрите і
		var menu = document.getElementsByClassName("navigation__submenu");	// клік не на меню - закрити меню,
		for (var i = 0; i < menu.length; i++) {
			var menuLi = menu[i].getElementsByTagName("li");
			for (var j = 0; j < menuLi.length; j++) {
				menuLi[j].style.display = "none";
			}
		}

		var arrows = document.getElementsByClassName("navigation__arrow");	// вернути стрілки у вихідне положення
		for (var i = 0; i < menu.length; i++) {
			arrows[i].classList.remove("fa-angle-up");
			arrows[i].classList.add("fa-angle-down");
		}

		isOpen = false;																											// та зафіксувати стан у змінній

		if(elem.classList.contains("fa-angle-down")) {											// а якщо клік на стрілці вниз,
			elem.classList.remove("fa-angle-down");														// замінити стрілку, викликати
			elem.classList.add("fa-angle-up");																// функції показу/приховування 
			toggle ("block");																									// підпунктів меню та зміна значення
			isOpen = true;																										// змінної isOpen
		}
		return;
	}

	if(elem.classList.contains("fa-angle-down")) {												// якщо клік на стрілці - заміна 
		elem.classList.remove("fa-angle-down");															// стрілки на протилежну, виклик
		elem.classList.add("fa-angle-up");																	// функції показу/приховування 
		toggle ("block");																										// підпунктів меню та зміна значення 
		isOpen = true;																											// змінної isOpen
		return;
	};

	if(elem.classList.contains("fa-angle-up")) {
		elem.classList.remove("fa-angle-up");
		elem.classList.add("fa-angle-down");
		toggle ("none");
		isOpen = false;
	}
}

/* ↑↑↑ big menu arrows ↑↑↑ */



/* ↓↓↓ cards must be square ↓↓↓ */

var cards = document.getElementsByClassName("card-holder__card");
var cardsWidth = getComputedStyle(cards[0]).width;
for (var i = 0; i < cards.length; i++) {
	cards[i].style.minHeight = cardsWidth;
};

/* ↑↑↑ cards must be square ↑↑↑ */

