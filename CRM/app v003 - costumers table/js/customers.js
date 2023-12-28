/* ↓↓↓ VARIABLES ↓↓↓ */
//option panel
var btnFilters       = document.getElementById('option-panel-filters');
var btnColumns       = document.getElementById('option-panel-columns');
var filtersPanel     = document.getElementById('filters-wrapper');
var columnsPanel     = document.getElementById('columns-wrapper');
var columnsSelect    = document.querySelectorAll('.column-label-wrapper input[type="checkbox"]');
var tableTh          = document.querySelectorAll('.customers-table th');
var tableTd          = document.querySelectorAll('.customers-table tr');

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
/* ↑↑↑ VARIABLES ↑↑↑ */


/* ↓↓↓ OPTION PANEL BEHAVIOR ↓↓↓ */
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

columnsSelect[0].onclick = function() {
  if(this.checked) {
    tableTh[1].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[1].style.display = 'none';
    }
  } else {
    tableTh[1].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[1].style.display = '';
    }
  }
}

columnsSelect[1].onclick = function() {
  if(this.checked) {
    tableTh[2].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[2].style.display = 'none';
    }
  } else {
    tableTh[2].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[2].style.display = '';
    }
  }
}

columnsSelect[2].onclick = function() {
  if(this.checked) {
    tableTh[3].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[3].style.display = 'none';
    }
  } else {
    tableTh[3].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[3].style.display = '';
    }
  }
}

columnsSelect[3].onclick = function() {
  if(this.checked) {
    tableTh[4].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[4].style.display = 'none';
    }
  } else {
    tableTh[4].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[4].style.display = '';
    }
  }
}

columnsSelect[4].onclick = function() {
  if(this.checked) {
    tableTh[5].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[5].style.display = 'none';
    }
  } else {
    tableTh[5].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[5].style.display = '';
    }
  }
}

columnsSelect[5].onclick = function() {
  if(this.checked) {
    tableTh[6].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[6].style.display = 'none';
    }
  } else {
    tableTh[6].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[6].style.display = '';
    }
  }
}

columnsSelect[6].onclick = function() {
  if(this.checked) {
    tableTh[7].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[7].style.display = 'none';
    }
  } else {
    tableTh[7].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[7].style.display = '';
    }
  }
}

columnsSelect[7].onclick = function() {
  if(this.checked) {
    tableTh[8].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[8].style.display = 'none';
    }
  } else {
    tableTh[8].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[8].style.display = '';
    }
  }
}

columnsSelect[8].onclick = function() {
  if(this.checked) {
    tableTh[9].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[9].style.display = 'none';
    }
  } else {
    tableTh[9].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[9].style.display = '';
    }
  }
}

columnsSelect[9].onclick = function() {
  if(this.checked) {
    tableTh[10].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[10].style.display = 'none';
    }
  } else {
    tableTh[10].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[10].style.display = '';
    }
  }
}

columnsSelect[10].onclick = function() {
  if(this.checked) {
    tableTh[11].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[11].style.display = 'none';
    }
  } else {
    tableTh[11].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[11].style.display = '';
    }
  }
}

columnsSelect[11].onclick = function() {
  if(this.checked) {
    tableTh[12].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[12].style.display = 'none';
    }
  } else {
    tableTh[12].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[12].style.display = '';
    }
  }
}

columnsSelect[12].onclick = function() {
  if(this.checked) {
    tableTh[13].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[13].style.display = 'none';
    }
  } else {
    tableTh[13].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[13].style.display = '';
    }
  }
}

columnsSelect[13].onclick = function() {
  if(this.checked) {
    tableTh[14].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[14].style.display = 'none';
    }
  } else {
    tableTh[14].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[14].style.display = '';
    }
  }
}

columnsSelect[14].onclick = function() {
  if(this.checked) {
    tableTh[15].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[15].style.display = 'none';
    }
  } else {
    tableTh[15].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[15].style.display = '';
    }
  }
}

columnsSelect[15].onclick = function() {
  if(this.checked) {
    tableTh[16].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[16].style.display = 'none';
    }
  } else {
    tableTh[16].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[16].style.display = '';
    }
  }
}

columnsSelect[16].onclick = function() {
  if(this.checked) {
    tableTh[17].style.display = 'none';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[17].style.display = 'none';
    }
  } else {
    tableTh[17].style.display = '';
    for (var i = 1; i < tableTd.length; i++) {
      tableTd[i].querySelectorAll('td')[17].style.display = '';
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
var thumbAreaTop  = thumbArea.getBoundingClientRect().top;
var thumbArea2Top = thumbArea2.getBoundingClientRect().top;
var tableHeader   = document.getElementById('customers-table-tr');
var tableBody     = document.getElementById('customers-table-body');

window.onscroll = function() {
  // скрол сторінки
  var pageScroll = window.pageYOffset || document.documentElement.scrollTop;

  // висота області видимості
  var clientHeight = document.documentElement.clientHeight;

  //ширина прокрутки повзунків (збивається при fixed)
  var thumbAreaWidth = thumbArea.offsetWidth;

  // перший повзунок
  if (pageScroll - columnsPanelValue - filtersPanelValue >= thumbAreaTop - 50) {
    // прикріпити до верху області видимості
    thumbArea.style.position = "fixed";
    thumbArea.style.top = "50px";
    thumbArea.style.width = thumbAreaWidth + "px";
    document.getElementById('thumbArea-buffer').style.display = "block";

  } else {
    thumbArea.style.position = "relative";
    thumbArea.style.top = "0px";
    document.getElementById('thumbArea-buffer').style.display = "none";
  }

  // другий повзунок
  if (pageScroll + clientHeight - thumbArea2.offsetHeight - columnsPanelValue - filtersPanelValue <= thumbArea2Top) {
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