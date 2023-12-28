window.onload = function() {
	/* ↓↓↓ VARIABLES ↓↓↓ */


	/* ↑↑↑ VARIABLES ↑↑↑ */


	/* ↓↓↓ OPTION PANEL BEHAVIOR ↓↓↓ */
	var btnFilters       = document.getElementById('option-panel-filters');
	var btnColumns       = document.getElementById('option-panel-columns');
	var filtersPanel     = document.getElementById('filters-wrapper');
	var columnsPanel     = document.getElementById('columns-wrapper');
	var columnsSelect    = document.querySelectorAll('.column-label-wrapper input[type="checkbox"]');
	var tableTh          = document.querySelectorAll('.customers-table th');
	var tableTd          = document.querySelectorAll('.customers-table tr');

	var columnsPanelisClose = true;
	var columnsPanelValue = 0;

	btnColumns.onclick = function(){
	  if (columnsPanelisClose) {
	    columnsPanel.style.transition = 'height 0.5s';
	    columnsPanel.style.height = '140px';
	    columnsPanelValue = 140;
	    columnsPanelisClose = false;
	    return;
	  } else {
	    columnsPanel.style.height = '0px';
	    columnsPanelisClose = true;
	    columnsPanelValue = 0;
	  }
	}

  // пробігтися по localStorage - відновити старі налаштування
	for (var i = 0; i < columnsSelect.length; i++) {
		var temp = 'isVisibleCustomersTableColumn' + (i + 1);
		if (localStorage.getItem(temp) == 'false') {
		  tableTh[i+1].style.display = 'none';
		  columnsSelect[i].checked = true;

			for (var j = 1; j < tableTd.length; j++) {
		    tableTd[j].querySelectorAll('td')[i+1].style.display = 'none';
		  }
		}
  }

  // onclick через цикл
  for (var i = 0; i < columnsSelect.length; i++) {
  	(function(n){
      columnsSelect[n].onclick = function() { toggleColumns(n);	};
  	}(i));
  }

  // вкл/викл колонку, записати зміни в localStorage
  function toggleColumns(arg) {
  	var temp = 'isVisibleCustomersTableColumn' + (arg + 1);
	  if(columnsSelect[arg].checked) {
	  	localStorage.setItem(temp,'false');
	    tableTh[arg+1].style.display = 'none';
	    for (var i = 1; i < tableTd.length; i++) {
	      tableTd[i].querySelectorAll('td')[arg+1].style.display = 'none';
	    }
	  } else {
	    localStorage.setItem(temp,'true');
	    tableTh[arg+1].style.display = '';
	    for (var i = 1; i < tableTd.length; i++) {
	      tableTd[i].querySelectorAll('td')[arg+1].style.display = '';
	    }
	  }
	}

	var filtersPanelisClose = true;
	var filtersPanelValue = 0;

	btnFilters.onclick = function(){
	  if (filtersPanelisClose) {
	    filtersPanel.style.transition = 'height 0.5s';
	    filtersPanel.style.height = '300px';
	    filtersPanelValue = 300;
	    filtersPanelisClose = false;
	    return;
	  } else {
	    filtersPanel.style.height = '0px';
	    filtersPanelisClose = true;
	    filtersPanelValue = 0;
	  }
	}
	/* ↑↑↑ /OPTION PANEL BEHAVIOR ↑↑↑ */

	/* ↓↓↓ THUMB BEHAVIOR ↓↓↓ */
	//first thumb
	var thumbArea        = document.getElementById('thumbArea');
	var thumbElem        = document.getElementById('thumb');
	var thumbLeftLine    = document.getElementById('thumbLeftLine');
	var thumbRightLine   = document.getElementById('thumbRightLine');
	var thumbObj         = document.getElementById('thumbObj');

	//second thumb
	var thumbArea2       = document.getElementById('thumbArea2');
	var thumbElem2       = document.getElementById('thumb2');
	var thumbLeftLine2   = document.getElementById('thumbLeftLine2');
	var thumbRightLine2  = document.getElementById('thumbRightLine2');

	thumbElem.onmousedown = function(e) {

	  // визначаємо метрики елементів
	  var thumbAreaWidth = thumbArea.offsetWidth;
	  var thumbElemWidth = thumbElem.offsetWidth;
	  var thumbObjWidth  = thumbObj.offsetWidth;

	  // визначаємо координати елементів
	  var thumbAreaCoords = getCoords(thumbArea);
	  var thumbCoords     = getCoords(thumbElem);

	  // призначаємо ширину полосок
	  thumbLeftLine.style.width  = thumbObjWidth + 'px';
	  thumbRightLine.style.width = thumbObjWidth + 'px';

	  thumbLeftLine2.style.width  = thumbObjWidth + 'px';
	  thumbRightLine2.style.width = thumbObjWidth + 'px';

	  // задаємо початкове положення лівої полоски
	  thumbLeftLine.style.left  = -thumbObjWidth + 'px';
	  thumbLeftLine2.style.left  = -thumbObjWidth + 'px';

	  // визначаємо зсув курсору відносно елементу
	  var shiftX = e.pageX - thumbCoords.left;

	  document.onmousemove = function(e) {
	    // розраховуємо нову координату повзунка
	    var newLeft = e.pageX - shiftX - thumbAreaCoords.left;

	    if (newLeft < 0) {
	      newLeft = 0;
	    }
	    // крайнє положення, де може бути повзунок
	    var rightEdge = thumbAreaWidth - thumbElemWidth;
	    if (newLeft > rightEdge) {
	      newLeft = rightEdge;
	    }

	    thumbElem.style.left = newLeft + 'px';
	    thumbLeftLine.style.left = newLeft - thumbObjWidth + thumbElemWidth + 'px';
	    thumbRightLine.style.left = newLeft + 'px';

	    var mult = newLeft*100/rightEdge;
	    thumbObj.style.marginLeft = -((thumbObjWidth-thumbAreaWidth)*mult/100) + 'px';

	    thumbElem2.style.left = newLeft + 'px';
	    thumbLeftLine2.style.left = newLeft - thumbObjWidth + thumbElemWidth + 'px';
	    thumbRightLine2.style.left = newLeft + 'px';
	  }

	  document.onmouseup = function() {
	    document.onmousemove = document.onmouseup = null;
	  };

	  return false; // disable selection start (cursor change)
	};

	thumbElem.ondragstart = function() {
	  return false;
	};

	thumbElem2.onmousedown = function(e) {

	  // визначаємо метрики елементів
	  var thumbAreaWidth2 = thumbArea2.offsetWidth;
	  var thumbElemWidth2 = thumbElem2.offsetWidth;
	  var thumbObjWidth  = thumbObj.offsetWidth;

	  // визначаємо координати елементів
	  var thumbAreaCoords2 = getCoords(thumbArea2);
	  var thumbCoords2     = getCoords(thumbElem2);

	  // призначаємо ширину полосок
	  thumbLeftLine2.style.width  = thumbObjWidth + 'px';
	  thumbRightLine2.style.width = thumbObjWidth + 'px';

	  thumbLeftLine.style.width  = thumbObjWidth + 'px';
	  thumbRightLine.style.width = thumbObjWidth + 'px';

	  // задаємо початкове положення лівої полоски
	  thumbLeftLine.style.left  = -thumbObjWidth + 'px';
	  thumbLeftLine2.style.left  = -thumbObjWidth + 'px';

	  // визначаємо зсув курсору відносно елементу
	  var shiftX = e.pageX - thumbCoords2.left;

	  document.onmousemove = function(e) {
	    // розраховуємо нову координату повзунка
	    var newLeft = e.pageX - shiftX - thumbAreaCoords2.left;

	    if (newLeft < 0) {
	      newLeft = 0;
	    }
	    // крайнє положення, де може бути повзунок
	    var rightEdge = thumbAreaWidth2 - thumbElemWidth2;
	    if (newLeft > rightEdge) {
	      newLeft = rightEdge;
	    }

	    thumbElem2.style.left = newLeft + 'px';
	    thumbLeftLine2.style.left = newLeft - thumbObjWidth + thumbElemWidth2 + 'px';
	    thumbRightLine2.style.left = newLeft + 'px';

	    var mult = newLeft*100/rightEdge;
	    thumbObj.style.marginLeft = -((thumbObjWidth-thumbAreaWidth2)*mult/100) + 'px';

	    thumbElem.style.left = newLeft + 'px';
	    thumbLeftLine.style.left = newLeft - thumbObjWidth + thumbElemWidth2 + 'px';
	    thumbRightLine.style.left = newLeft + 'px';
	  }

	  document.onmouseup = function() {
	    document.onmousemove = document.onmouseup = null;
	  };

	  return false; // disable selection start (cursor change)
	};

	thumbElem2.ondragstart = function() {
	  return false;
	};

	/* ↑↑↑ /THUMB BEHAVIOR ↑↑↑ */

	/* ↓↓↓ THUMBAREA BEHAVIOR ↓↓↓ */
	var thumbAreaTop      = thumbArea.getBoundingClientRect().top;
	var thumbArea2Top     = thumbArea2.getBoundingClientRect().top;
	var tableHeader       = document.getElementById('customers-table-tr');
	var header            = document.querySelector('.header');
	var headerHeight      = header.offsetHeight;

	window.onscroll = function() {
	  // скрол сторінки
	  var pageScroll = window.pageYOffset || document.documentElement.scrollTop;

	  // висота області видимості
	  var clientHeight = document.documentElement.clientHeight;

	  //ширина прокрутки повзунків (збивається при fixed)
	  var thumbAreaWidth = thumbArea.offsetWidth;

	  var multifilterHeight = document.querySelector('.multifilter').offsetHeight;
	  // перший повзунок
	  if (pageScroll - columnsPanelValue - filtersPanelValue - multifilterHeight >= thumbAreaTop - headerHeight) {
	    // прикріпити до верху області видимості
	    thumbArea.style.position = "fixed";
	    thumbArea.style.top = headerHeight + "px";
	    thumbArea.style.width = thumbAreaWidth + "px";
	    document.getElementById('thumbArea-buffer').style.display = "block";

	  } else {
	    thumbArea.style.position = "relative";
	    thumbArea.style.top = "0px";
	    document.getElementById('thumbArea-buffer').style.display = "none";
	  }

	  // другий повзунок
	  if (pageScroll + clientHeight - thumbArea2.offsetHeight - columnsPanelValue - filtersPanelValue - multifilterHeight <= thumbArea2Top) {
	    thumbArea2.style.position = "fixed";
	    thumbArea2.style.top = clientHeight - thumbArea2.offsetHeight + "px";
	    thumbArea2.style.width = thumbAreaWidth + "px";
	  } else {
	    thumbArea2.style.position = "relative";
	    thumbArea2.style.top = "0px";
	  }
	}
	/* ↑↑↑ /THUMBAREA BEHAVIOR ↑↑↑ */

	/* ↓↓↓ FUNCTIONS ↓↓↓ */
	function getCoords(elem) {
	  var box = elem.getBoundingClientRect();
	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}
	/* ↑↑↑ FUNCTIONS ↑↑↑ */

	/* ↓↓↓ MULTIFILTER ↓↓↓ */
	document.getElementById('VerificationStatusSelect').onchange = function() {
	  document.getElementById('resultVerificationStatusSelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultVerificationStatusSelect').innerHTML = this.value;
	};
	document.getElementById('IsActiveSelect').onchange = function() {
	  document.getElementById('resultIsActiveSelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultIsActiveSelect').innerHTML = this.value;
	};
	document.getElementById('IsTradingSelect').onchange = function() {
	  document.getElementById('resultIsTradingSelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultIsTradingSelect').innerHTML = this.value;
	};
	document.getElementById('CompanySelect').onchange = function() {
	  document.getElementById('resultCompanySelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultCompanySelect').innerHTML = this.value;
	};
	document.getElementById('AccountSelect').onchange = function() {
	  document.getElementById('resultAccountSelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultAccountSelect').innerHTML = this.value;
	};
	document.getElementById('CountrySelect').onchange = function() {
	  document.getElementById('resultCountrySelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultCountrySelect').innerHTML = this.value;
	};
	document.getElementById('employerSelect').onchange = function() {
	  document.getElementById('resultemployerSelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultemployerSelect').innerHTML = this.value;
	};
	document.getElementById('statusSelect').onchange = function() {
	  document.getElementById('resultstatusSelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultstatusSelect').innerHTML = this.value;
	};
	document.getElementById('specStatusesSelect').onchange = function() {
	  document.getElementById('resultspecStatusesSelect').parentElement.style.display = "inline-block";
	  document.getElementById('resultspecStatusesSelect').innerHTML = this.value;
	};
	document.getElementById('pageCount').onchange = function() {
	  document.getElementById('resultpageCount').parentElement.style.display = "inline-block";
	  document.getElementById('resultpageCount').innerHTML = this.value;
	};

	document.getElementById('mf-close-btn-1').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-2').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-3').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-4').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-5').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-6').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-7').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-8').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-9').onclick = function() {
	  this.parentElement.style.display = "none";
	}
	document.getElementById('mf-close-btn-10').onclick = function() {
	  this.parentElement.style.display = "none";
	}
}
	/* ↑↑↑ MULTIFILTER ↑↑↑ */