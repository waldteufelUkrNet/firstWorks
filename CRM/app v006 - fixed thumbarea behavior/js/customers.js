	/* ↓↓↓ OPTION PANEL BEHAVIOR ↓↓↓ */
	var storeg           = $('#tableMarker').val(); // коли таблиць багато, щоб вони не користувалися одними змінними
	var btnFilters       = document.getElementById('option-panel-filters');
	var btnColumns       = document.getElementById('option-panel-columns');
	var filtersPanel     = document.getElementById('filters-wrapper');
	var columnsPanel     = document.getElementById('columns-wrapper');
	var columnsSelect    = document.querySelectorAll('.column-label-wrapper input[type="checkbox"]');
	var tableTh          = document.querySelectorAll('.customers-table th');
	var tableTd          = document.querySelectorAll('.customers-table tr');

	var columnsPanelisClose = true;
	btnColumns.onclick = function(){
	  if (columnsPanelisClose) {
	    columnsPanel.style.transition = 'height 0.5s';
	    columnsPanel.style.height = '140px';
	    columnsPanelisClose = false;
	    return;
	  } else {
	    columnsPanel.style.height = '0px';
	    columnsPanelisClose = true;
	  }
	}

  // пробігтися по localStorage - відновити старі налаштування
	for (var i = 0; i < columnsSelect.length; i++) {
        var temp = 'isVisible' + storeg +'TableColumn' + (i + 1);
		if (localStorage.getItem(temp) === 'false') {
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
      var temp = 'isVisible' + storeg + 'TableColumn' + (arg + 1);
      var i;
      if(columnsSelect[arg].checked) {
	  	localStorage.setItem(temp,'false');
	    tableTh[arg+1].style.display = 'none';
	    for (i = 1; i < tableTd.length; i++) {
	      tableTd[i].querySelectorAll('td')[arg+1].style.display = 'none';
	    }
	  } else {
	    localStorage.setItem(temp,'true');
	    tableTh[arg+1].style.display = '';
	    for (i = 1; i < tableTd.length; i++) {
	      tableTd[i].querySelectorAll('td')[arg+1].style.display = '';
	    }
	  }
	}

	var filtersPanelisClose = true;
	btnFilters.onclick = function(){
	  if (filtersPanelisClose) {
	    filtersPanel.style.transition = 'height 0.5s';
	    filtersPanel.style.height = '300px';
	    filtersPanelisClose = false;
	    return;
	  } else {
	    filtersPanel.style.height = '0px';
	    filtersPanelisClose = true;
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
	var headerHeight      = document.querySelector('.header').offsetHeight;
	var tableHeaderHeight = document.getElementById('customers-table-tr').offsetHeight;
  var thumbAreaHeight   = thumbArea.offsetHeight;

	window.onscroll = function () {
	  var tableTop     = document.querySelector('.table-wrapper').getBoundingClientRect().top;
	  var tableBottom  = document.querySelector('.table-wrapper').getBoundingClientRect().bottom;
	  var tableHeight  = document.querySelector('.table-wrapper').offsetHeight;
	  var windowTop    = 0;
	  var windowBottom = document.documentElement.clientHeight;

	  // ширина полос повзунків збивається при fixed
	  var thumbAreaWidth = thumbArea.offsetWidth;
	  
	  // перша полоса
	  if (tableTop - headerHeight <= windowTop && tableTop - headerHeight >= -tableHeight + thumbAreaHeight*2 + tableHeaderHeight*3) {
	    // прикріпити до верху області видимості
	    thumbArea.style.position = "fixed";
	    thumbArea.style.top = headerHeight + "px";
	    thumbArea.style.width = thumbAreaWidth + "px";
	    document.getElementById('thumbArea-buffer').style.display = "block";
	  } else {
	  	// відкріпити від верху області видимості
	    thumbArea.style.position = "relative";
	    thumbArea.style.top = "0px";
	    document.getElementById('thumbArea-buffer').style.display = "none";
	  }

	  // друга полоса
	  if (tableBottom >= windowBottom && tableBottom <= windowBottom + tableHeight - thumbAreaHeight*2 - tableHeaderHeight*3) {
	    // прикріпити до низу області видимості
	    thumbArea2.style.position = "fixed";
	    thumbArea2.style.top = windowBottom - thumbArea2.offsetHeight + "px";
	    thumbArea2.style.width = thumbAreaWidth + "px";
	  } else {
	  	// відкріпити від низу області видимості
	    thumbArea2.style.position = "relative";
	    thumbArea2.style.top = "0px";
	  }
	}
	/* ↑↑↑ /THUMBAREA BEHAVIOR ↑↑↑ */

	/* ↓↓↓ DATEPICKER ↓↓↓ */
	$('#date-start').datepicker({
		firstDay: 1,
		dateFormat: "dd.mm.yy"});
  $('#date-end').datepicker({
		firstDay: 1,
		dateFormat: "dd.mm.yy"});
	/* ↑↑↑ DATEPICKER ↑↑↑ */

	/* ↓↓↓ FUNCTIONS ↓↓↓ */
	function getCoords(elem) {
	  var box = elem.getBoundingClientRect();
	  return {
	    top    : box.top + pageYOffset,
	    bottom : box.bottom + pageYOffset,
	    left   : box.left + pageXOffset,
	    right  : box.right + pageXOffset,
	    height : box.bottom - box.top
	  };
	}
	/* ↑↑↑ FUNCTIONS ↑↑↑ */