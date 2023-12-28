// made by waldteufel@ukr.net

var tableMarker   = $('#tableMarker').val(), // коли таблиць багато, щоб вони не користувалися одними змінними
    btnFilters    = document.getElementById('option-panel-filters'),
    btnColumns    = document.getElementById('option-panel-columns'),
    filtersPanel  = document.getElementById('filters-wrapper'),
    columnsPanel  = document.getElementById('columns-wrapper'),
    columnsSelect = document.querySelectorAll('.column-label-wrapper input[type="checkbox"]'),
    tableTh       = document.querySelectorAll('.customers-table th'),
    tableTd       = document.querySelectorAll('.customers-table tr');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ DATEPICKER INITIALISATION ↓↓↓ */
$('#date-start').datepicker({
  firstDay: 1,
  dateFormat: "dd.mm.yy"});
$('#date-end').datepicker({
  firstDay: 1,
  dateFormat: "dd.mm.yy"});
/* ↑↑↑ DATEPICKER INITIALISATION ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ THUMB BEHAVIOR ↓↓↓ */
var container = $('.table-wrapper');
var topscroll = $('.topscroll');

$('.fake').width($('.customers-table').width() + 250);
$('.table-wrapper').width($('.table-scroll-wrapper').width());

topscroll.scroll(function(e){
  container.scrollLeft($(this).scrollLeft());
});
container.scroll(function(e){
  topscroll.scrollLeft($(this).scrollLeft());
});
/* ↑↑↑ /THUMB BEHAVIOR ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ CHECK-ALL INPUT ↓↓↓ */
function SelectCust(THIS) {
// функція відповідає за глобальний інпут "вибрати всіх" в таблиці та суміжну поведінку
  var tempI_i, tempI_th, customerId;
  var arrOFInputs       = $("input[onchange]");           // масив input'ів
  var arrOfTheads       = $('#customers-table-tr tr th'); // масив заголовків таблиці
  var arrOfHiddenInputs = $('input[name="idCustomers"]'); // масив прихованих input'ів
  var count             = 0;

  if ( $(THIS).attr('id') == 'checkAll' ) {
    // клік по головному input'у - циклом виділити або зняти виділення
    if ( $(THIS).prop('checked') ) {
      // виділити
      for (var i=0; i<arrOFInputs.length; i++) {
        $(arrOFInputs[i]).prop('checked', true);
      }
      // знаходимо порядковий номер id-колонки
      for (var i=0; i<arrOfTheads.length; i++) {
        if ( $(arrOfTheads[i]).text().toLowerCase() == 'id' ) {
          tempI_th = i;
          break
        }
      }
      for (var i=0; i<arrOfHiddenInputs.length; i++) {
        // підставляємо потрібні номери інпута та id-колонки, знаходимо id
        customerId = $('#customers-table-body.customers-table__tbody tr:eq(' + i + ') td:eq(' + tempI_th + ')').text();

        // вставляємо id в сусідній (прихований) input (так треба бекендщикам)
        $("input[name='idCustomers']:eq(" + i + ")").val(customerId);
      }
    } else {
      // прибрати виділення
      for (var i=0; i<arrOFInputs.length; i++) {
        $(arrOFInputs[i]).prop('checked', false);
      }
      for (var i=0; i<arrOfHiddenInputs.length; i++) {
        $(arrOfHiddenInputs[i]).val('');
      }
    }
  } else {
    // клік по одному з input'ів - виділити або зняти виділення
    // знаходимо порядковий номер потрібного інпута
    for (var i=0; i<arrOFInputs.length; i++) {
      if (arrOFInputs[i] == THIS) {
        tempI_i = i;
        break
      }
    }
    // виділити
    if ( $(THIS).prop('checked') ) {

      // знаходимо порядковий номер id-колонки
      for (var i=0; i<arrOfTheads.length; i++) {
        if ( $(arrOfTheads[i]).text().toLowerCase() == 'id' ) {
          tempI_th = i;
          break
        }
      }

      // підставляємо потрібні номери інпута та id-колонки, знаходимо id
      customerId = $('#customers-table-body.customers-table__tbody tr:eq(' + (tempI_i-1) + ') td:eq(' + tempI_th + ')').text();

      // вставляємо id в сусідній (прихований) input (так треба бекендщикам)
      $("input[name='idCustomers']:eq(" + (tempI_i-1) + ")").val(customerId);

      // якщо усі інпути вибрані - вибрати також і головний
      for (var i=0; i<arrOFInputs.length; i++) {
        if ($(arrOFInputs[i]).prop('checked') == true) count++;
      }
      if ( count + 1 == arrOFInputs.length) $('#checkAll').prop('checked', true);

    } else {
      // очищуємо id сусіднього (прихованого) input'а
      $("input[name='idCustomers']:eq(" + (tempI_i-1) + ")").val('');
      // прибираємо пташку з головного input'а
      $('#checkAll').prop('checked', false);
    }
  }

  count = 0;
  for (var i=1; i<arrOFInputs.length; i++) {
    if ($(arrOFInputs[i]).prop('checked') == true) count++;
  }
  $('#checkedAmount').text(count);
}
/* ↑↑↑ /CHECK-ALL INPUT ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ COLUMNS SORT ↓↓↓ */
$(".table-sort-btn").click(function(){
  var columnNumber = $(this).attr('data-column-number');

  var arrOfSortBtn = $(".table-sort-btn");
  for (var i = 0; i < arrOfSortBtn.length; i++) {
    if (arrOfSortBtn[i] == this) {
      var numberOfColumn = i;
    };
    // arrow animation reset
    $(arrOfSortBtn[i]).css({"transition":".5s","transform":"rotate(0deg)"}).removeClass('table-sort-btn_active');
  }

  // active column hightlighting
  $(this).addClass('table-sort-btn_active');

  if (!this.isSorted) {
    this.isSorted = true;
    this.isUpToDownSorted = true;

    // Up-To-Down-sort
    $('#tableSort').attr('data-column-number', columnNumber)
                   .attr('data-sort-type','Up-To-Down');

    return;

  } else {

    if (this.isUpToDownSorted) {
      this.isUpToDownSorted = false;
      this.isDownToUpSorted = true;
      $(this).css({"transition":".5s","transform":"rotate(-180deg)"});

      // Down-To-Up-sort function
      $('#tableSort').attr('data-column-number', columnNumber)
                     .attr('data-sort-type','Down-To-Up');

      return;

    };

    if (this.isDownToUpSorted) {
      this.isDownToUpSorted = false;
      this.isUpToDownSorted = true;
      $(this).css({"transition":".5s","transform":"rotate(0deg)"});

      // Up-To-Down-sort function
      $('#tableSort').attr('data-column-number', columnNumber)
                     .attr('data-sort-type','Up-To-Down');

      return;
    };

  };

});
/* ↑↑↑ /COLUMNS SORT ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ OPEN/CLOSE PANELS ↓↓↓ */
var columnsPanelIsClose = true;
btnColumns.onclick = function(){
  if (columnsPanelIsClose) {
    columnsPanel.style.height = 'auto';
    var tempHeight = $('.option-panel__columns-wrapper').css('height');
    columnsPanel.style.height = '0px';
        setTimeout(function () {
            columnsPanel.style.transition = 'height 0.3s';
            columnsPanel.style.height = tempHeight;
        }, 4)
    columnsPanelIsClose = false;
  } else {
    columnsPanel.style.height = '0px';
    columnsPanelIsClose = true;
  }
}

var filtersPanelIsClose = true;
$(btnFilters).click(function() {
    if (filtersPanelIsClose) {
        filtersPanel.style.height = 'auto';
        var tempHeight = $('.option-panel__filters-wrapper').css('height');
        filtersPanel.style.height = '0px';
        setTimeout(function () {
            filtersPanel.style.transition = 'height 0.3s';
            filtersPanel.style.height = tempHeight;
        }, 4);
        filtersPanelIsClose = false;
    } else {
        filtersPanel.style.height = '0px';
        filtersPanelIsClose = true;
    }
});
/* ↑↑↑ OPEN/CLOSE PANELS ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ WORK WITH LOCALSTORAGE (COLUMNS) ↓↓↓ */
// пробігтися по localStorage - відновити старі налаштування
for (var i = 0; i < columnsSelect.length; i++) {
  var temp = 'isVisible' + tableMarker + 'TableColumn' + (i + 1);
  if (localStorage.getItem(temp) === 'false') {
    tableTh[i+1].style.display = 'none';
    columnsSelect[i].checked = true;

    for (var j = 1; j < tableTd.length; j++) {
      tableTd[j].querySelectorAll('td')[i+1].style.display = 'none';
    }
  }
}

// onclick через цикл - навішування обробника на усі кнопки
for (var i = 0; i < columnsSelect.length; i++) {
  (function(n){
    columnsSelect[n].onclick = function() {
      toggleColumns(n);
    };
  }(i));
}

function toggleColumns(arg) {
  // вкл/викл колонку, записати зміни в localStorage
  var temp = 'isVisible' + tableMarker + 'TableColumn' + (arg + 1);
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
/* ↑↑↑ /WORK WITH LOCALSTORAGE (COLUMNS) ↑↑↑ */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ↓↓↓ WORK WITH LOCALSTORAGE (FILTERS) ↓↓↓ */
// Загальна логіка роботи з LOCALSTORAGE:

// LS   - localStorage
// КЗФ  - кнопка закриття фільтру
// КЗУФ - кнопка закриття усіх фільтрів

// Типи полів:
// 1. select-option
// 2. datalist-option + input
// 3. input + input
// 4. select-option with multichoice

// А. ЗАВАНТАЖЕННЯ СТОРІНКИ:
//    1. Перевіряти LS, якщо він не пустий:
//       1. вписувати відповідні значення в поля вибору
//       2. додавати КЗФ
//       3. якщо КЗФ більше однієї - показувати КЗУФ
//       !! Особливості часу (input + input): якщо обрані два input'и - КЗФ робити одну

// Б. ВИБІР ЗНАЧЕННЯ В ПОЛІ:
//    1. при першому виборі:
//       1. Додати значення в LS
//       2. додати КЗФ
//       3. якщо КЗФ більше однієї - показувати КЗУФ
//       !! Особливості часу (input + input): якщо обрані два input'и - КЗФ робити одну
//    2. при зміні вибору:
//       1. Замінити значення в LS
//       2. Замінити текст в КЗФ, без видалення самої КЗФ
//       !! Особливості часу (input + input): якщо обрані два input'и - КЗФ робити одну
//    3. при скасуванні вибору:
//       1. Видалити значення з LS
//       2. прибрати КЗФ
//       3. якщо КЗФ менше 2х - приховати КЗУФ

// В. Клік на маркер:
//    1. Видалити значення з LS
//    2. у поле вибору внести значення за замовчуванням
//    3. якщо КЗФ менше 2х - приховати кнопку скидання фільтрів

// Г. Клік на КЗУФ:
//    1. Повністю вичистити LS
//    2. прибрати повністю усі маркери фільтрів
//    3. в усі поля вибору внести значення за замовчуванням
//    4. видалити кнопку скидання фільтрів

var filterMemory = filterMemory_dateEnd = filterMemory_dateStart = filterMemory_employer = {};

/* ↓↓↓ select-option ↓↓↓ */
  // пробігтися по localStorage - відновити старі налаштування
  if (localStorage.filterMemory) {
    // localStorage -> object
    filterMemory = JSON.parse(localStorage.filterMemory);

    for (var key in filterMemory[tableMarker]) {
      var tempId = '#' + key;
      if ( $(tempId).attr('data-multichoice') == 'true' ) {
        // multichoice
        // додати маркери
        var tempArr = filterMemory[tableMarker][key];
        for (var i=0; i<tempArr.length; i++) {
          var innerText = $( $(tempId)[0][tempArr[i]] ).text();
          // блокування "Все"
          if ( tempArr[i] == 0 ) {
            continue
          }

          addFilterMarker(innerText, key);
          // змінити значення поля
          $( $(tempId)[0][tempArr[i]] ).attr('selected','true');
        }
      } else {
        // simple choice
        var tempNo = filterMemory[tableMarker][key];
        $( $(tempId)[0][tempNo] ).attr('selected','true');

        var innerText = $( $(tempId)[0][tempNo] ).text();
        var parentID  = $( $(tempId)[0][tempNo] ).parent().attr('id');
        if (innerText != 'Все' && innerText != '5') {
          addFilterMarker(innerText,parentID);
        }//  else {
        //   delete filterMemory[tableMarker][key];
        // }
      }
    }
  }
  // вибір опції
  $('.filters-label-wrapper label select').change(function() {
    // $('.filters-label-wrapper label select OPTION').click(function() {... - dont work in webkit
    var selectEl  = $(this),
        selectID  = $(selectEl).attr('id'),
        optionEl  = $(selectEl).children(':selected'),
        innerText = $(optionEl).text(),
        selector  = '.filter-marker[data-parent-id=' + selectID +']';

    // optionElNumber (this is value in object)
    var tempArr = $(selectEl).children('option');
    for (var i = 0; i < tempArr.length; i++) {
      if ( $(tempArr[i]).text() == $(optionEl).text() ) {
        var optionElNumber = i;
      }
    }

    if ( localStorage.filterMemory ) {
      filterMemory = JSON.parse(localStorage.filterMemory);
    }

    // вкладений об'єкт (для даної сторінки)
    if ( !filterMemory[tableMarker] ) {
      filterMemory[tableMarker] = {};
    }

    if ( $( $(selectEl)[0] ).attr('data-multichoice') == 'true' ) {
      // multichoice
      if ( !filterMemory[tableMarker][selectID] ) {
        // створити масив, додати елемент
        var tempArr = [];
        tempArr.push(optionElNumber);
        filterMemory[tableMarker][selectID] = tempArr;

        addFilterMarker(innerText,selectID);

        // object -> string -> localStorage
        localStorage.filterMemory = JSON.stringify(filterMemory);

      } else {
        // додати елемент в існуючий масив (якщо його ще нема)
        var tempArr = filterMemory[tableMarker][selectID];
        for (var i=0; i<tempArr.length; i++) {
          if ( optionElNumber == tempArr[i] && optionElNumber != 0 ) {
            return
          } else if (optionElNumber == 0) {
            // скинути запис в localStorage
            delete filterMemory[tableMarker][selectID];
            localStorage.filterMemory = JSON.stringify(filterMemory);

            // створити допоміжний масив з іменами селектів
            var tempArrOfSelectNames = [];
            var tempArrOfSelect = $(selectEl).children();
            for (var i=0; i<tempArrOfSelect.length; i++) {
              tempArrOfSelectNames.push( $(tempArrOfSelect[i]).text() )
            }

            // порівняти наявні маркери зі значеннями в масиві - якщо є співпадіння - видалити маркер
            var tempArrOfMarkers = $('.filter-marker');
            for (var i=0; i<tempArrOfMarkers.length; i++) {
              for (var j=0; j<tempArrOfSelectNames.length; j++) {
                var where = $(tempArrOfMarkers[i]).text();
                var what  = tempArrOfSelectNames[j];
                if ( ~where.indexOf(what) ) {
                  $( tempArrOfMarkers[i] ).remove();
                }
              }
            }

            toggleClearFiltersBtn();
            return
          }
        }
        filterMemory[tableMarker][selectID].push(optionElNumber);
        localStorage.filterMemory = JSON.stringify(filterMemory);

        if (innerText != 'Все') {
          addFilterMarker(innerText,selectID);
        }
      }
    } else {
      // simple choice
      filterMemory[tableMarker][selectID] = optionElNumber;

      if ( $(selector).length != 0 ) {
        $(selector).remove();
      }
      if (innerText != 'Все' && innerText != '5') {
        addFilterMarker(innerText,selectID);
      } else {
        delete filterMemory[selectID];
      }
      // object -> string -> localStorage
      localStorage.filterMemory = JSON.stringify(filterMemory);
    }

    toggleClearFiltersBtn();
  });
/* ↑↑↑ /select-option ↑↑↑ */

/* ↓↓↓ datalist-option + input ↓↓↓ */
  // пробігтися по localStorage - відновити старі налаштування
  if (localStorage.filterMemory_employer) {
    // localStorage -> object
    filterMemory_employer = JSON.parse(localStorage.filterMemory_employer);
    if (filterMemory_employer[tableMarker] && !isObjectEmpty(filterMemory_employer[tableMarker])) {

      $('#employerSelect + input').val(filterMemory_employer[tableMarker]);
      $('#filter-markers-panel').css({'display':'block'});
      addFilterMarker(filterMemory_employer[tableMarker], 'employer');
    }
  }
  // вибір опції
  $("#empInput").click(function () {

    /* ↓↓↓ затичка ↓↓↓ */
    /* суть затички: якщо цього фрагменту коду нема, то виникає наступна проблема:
    1. спочатку вибір будь-якого селекту, потім вибір співробітника - усе працює нормально
    2. спочатку вибір співробітника, потім вибір мультиселекту - ламається local storage, кнопки на закриття фільтрів не
       працюють
    3. спочатку вибір співробітника, потім вибір моноселекту - ламається local storage, але кнопки працюють
    */
    if ( !filterMemory[tableMarker] ) {
      filterMemory[tableMarker] = {};
      localStorage.filterMemory = JSON.stringify(filterMemory);
    }
    /* ↑↑↑ /затичка ↑↑↑ */

    if ( !filterMemory_employer[tableMarker] ) {
      filterMemory_employer[tableMarker] = {};
    }

    if ($('#employerSelect + input').val() != '' && $('#employerSelect + input').val() != 'Все' && $('#employerSelect + input').val() != 'All') {
      filterMemory_employer[tableMarker] = $('#employerSelect + input').val();
      localStorage.filterMemory_employer = JSON.stringify(filterMemory_employer);

      $('.filter-marker[data-parent-id=employer]').remove();
      addFilterMarker(filterMemory_employer[tableMarker], 'employer');
    } else {
      filterMemory_employer[tableMarker] = {};
      localStorage.filterMemory_employer = JSON.stringify(filterMemory_employer);
      $('.filter-marker[data-parent-id=employer]').remove();
    }
    toggleClearFiltersBtn();
  });
/* ↑↑↑ /datalist-option + input ↑↑↑ */

/* ↓↓↓ input + input (jQuery datapicker inputs) ↓↓↓ */
  // пробігтися по localStorage - відновити старі налаштування
  if (localStorage.filterMemory_dateStart || localStorage.filterMemory_dateEnd) {

    if (localStorage.filterMemory_dateStart) {
      filterMemory_dateStart = JSON.parse(localStorage.filterMemory_dateStart);
    }
    if (localStorage.filterMemory_dateEnd) {
      filterMemory_dateEnd = JSON.parse(localStorage.filterMemory_dateEnd);
    }

    if ( filterMemory_dateStart[tableMarker] && filterMemory_dateEnd[tableMarker] && !isObjectEmpty(filterMemory_dateStart[tableMarker]) && !isObjectEmpty(filterMemory_dateEnd[tableMarker]) ) {
      $('#date-start').val(filterMemory_dateStart[tableMarker]);
      $('#date-end').val(filterMemory_dateEnd[tableMarker]);
      addFilterMarker(null, 'dateStart', 'startEnd');
    } else if ( !filterMemory_dateStart[tableMarker] && filterMemory_dateEnd[tableMarker] && !isObjectEmpty(filterMemory_dateEnd[tableMarker]) ) {
      $('#date-end').val(filterMemory_dateEnd[tableMarker]);
      addFilterMarker(filterMemory_dateEnd[tableMarker], 'dateEnd', 'end');
    } else if ( filterMemory_dateStart[tableMarker] && !isObjectEmpty(filterMemory_dateStart[tableMarker]) && !filterMemory_dateEnd[tableMarker] ) {
      $('#date-start').val(filterMemory_dateStart[tableMarker]);
      addFilterMarker(filterMemory_dateStart[tableMarker], 'dateStart', 'start');
    }
  }
  // вибір опцій
  $('#dataPieckerBtn').click(function() {
    $('.filter-marker[data-filter-time="true"]').remove();

    var tempStart = $('#date-start').val(),
        tempEnd   = $('#date-end').val();

    filterMemory_dateStart[tableMarker] = tempStart;
    localStorage.filterMemory_dateStart = JSON.stringify(filterMemory_dateStart);

    filterMemory_dateEnd[tableMarker]   = tempEnd;
    localStorage.filterMemory_dateEnd   = JSON.stringify(filterMemory_dateEnd);

    if ( tempStart != '' && tempEnd != '' ) {
      addFilterMarker(null, 'dateStart', 'startEnd');
    } else if ( tempStart == '' && tempEnd != '' ) {
      addFilterMarker(tempEnd, 'dateEnd', 'end');
    } else if ( tempStart != '' && tempEnd == '') {
      addFilterMarker(tempStart, 'dateStart', 'start');
    }
    toggleClearFiltersBtn ();
  });
/* ↑↑↑ /input + input (jQuery datapicker inputs) ↑↑↑ */

/* ↓↓↓ click on filter-marker ↓↓↓ */
function removeParent(THIS){
// скидає фільтр, видаляє маркер, чистить localStorage, перевіряє кількість маркерів
  var tempAttr = $( $( $(THIS)[0] ).parent()[0] ).attr('data-parent-id') || $( $(THIS)[0] ).attr('data-parent-id');

  if(localStorage.filterMemory) {
    filterMemory           = JSON.parse(localStorage.filterMemory);
  }
  if(localStorage.filterMemory_employer) {
    filterMemory_employer  = JSON.parse(localStorage.filterMemory_employer);
  }
  if(localStorage.filterMemory_dateStart) {
    filterMemory_dateStart = JSON.parse(localStorage.filterMemory_dateStart);
  }
  if(localStorage.filterMemory_dateEnd) {
    filterMemory_dateEnd   = JSON.parse(localStorage.filterMemory_dateEnd);
  }

  if ( $('#' + tempAttr).attr('data-multichoice') == 'true' ) {
    // multichoice
    // підправити localStorage
    var tempArr          = filterMemory[tableMarker][tempAttr];
    var tempMarkerText   = $(THIS).parent().text();
    var tempArrOfOptions = $( $('#' + tempAttr)[0] ).children();
    // пошук порядкового номера, під яким знаходиться елемент, який потрібно видалити
    for (var i=0; i<tempArrOfOptions.length; i++) {
      var tempText = $( tempArrOfOptions[i] ).text();
      // пошук співпадінь
      if ( ~tempMarkerText.indexOf(tempText) ) {
        var tempEl = i;
        break;
      }
    }
    // видалення з масиву номеру закритого маркера - утворюється undefined
    for (var i=0; i<tempArr.length; i++) {
      if ( tempArr[i] == tempEl) {
        delete tempArr[i]
      }
    }
    // чистка від пробілів в масиві
    tempArr = tempArr.filter(function (el) {
      return el != null;
    });

    // збереження змін в localStorage
    filterMemory[tableMarker][tempAttr] = tempArr;
    localStorage.filterMemory = JSON.stringify(filterMemory);

    // змінити значення поля
    // якогось х** так не працює
    for(var i=0; i<tempArrOfOptions.length;i++) {
      $( $(tempArrOfOptions[i]) ).attr('selected','').removeAttr('selected');
    }
    tempArr = filterMemory[tableMarker][tempAttr];
    for(var i=0; i<tempArr.length;i++) {
      var tempI = tempArr[i];
      $(tempArrOfOptions[tempArr[i]]).attr('selected','true');
    }

  } else {
    // simple choice
    if ( tempAttr == 'employer' ) {
      // datalist-option + input
      // скидання фільтру
      $($('#employerSelect + input')[0]).val('');
      // чистка localStorage
      filterMemory_employer[tableMarker] = {};
      localStorage.filterMemory_employer = JSON.stringify(filterMemory_employer);
    } else if ( tempAttr == 'dateEnd' || tempAttr == 'dateStart') {
      // input + input
      // скидання фільтрів
      $('#date-end').val('');
      $('#date-start').val('');
      // чистка localStorage
      filterMemory_dateStart[tableMarker] = {};
      localStorage.filterMemory_dateStart = JSON.stringify(filterMemory_dateStart);
      filterMemory_dateEnd[tableMarker]   = {};
      localStorage.filterMemory_dateEnd   = JSON.stringify(filterMemory_dateEnd);
    } else {
      // select-option
      // скидання фільтру
      var tempSelector = '.filters-label-wrapper select#' + tempAttr + ' option'
      $(tempSelector).attr('selected','').removeAttr('selected');

      // чистка localStorage
      delete filterMemory[tableMarker][tempAttr];
      localStorage.filterMemory = JSON.stringify(filterMemory);
    }
  }

  // видалення маркеру
  $(THIS).parent().remove();

  // перевірка кількості маркерів (якщо потрібно - видалення кнопки "скинути усі фільтри")
  toggleClearFiltersBtn();
}
/* ↑↑↑ /click on filter-marker ↑↑↑ */

/* ↓↓↓ click on clear-filters-btn ↓↓↓ */
// скидання фільтрів, видалення маркерів та чистка localStorage
$('#clear-filters-btn').click(function(){

  // чистка localStorage тільки для активної сторінки (з id=tableMarker)
  if ( localStorage.filterMemory ) {
    filterMemory              = JSON.parse(localStorage.filterMemory);
    filterMemory[tableMarker] = {};
    localStorage.filterMemory = JSON.stringify(filterMemory);
  }

  if ( localStorage.filterMemory_dateStart ) {
    filterMemory_dateStart              = JSON.parse(localStorage.filterMemory_dateStart);
    filterMemory_dateStart[tableMarker] = {};
    localStorage.filterMemory_dateStart = JSON.stringify(filterMemory_dateStart);
  }

  if ( localStorage.filterMemory_dateEnd ) {
    filterMemory_dateEnd               = JSON.parse(localStorage.filterMemory_dateEnd);
    filterMemory_dateEnd[tableMarker]  = {};
    localStorage.filterMemory_dateEnd  = JSON.stringify(filterMemory_dateEnd);
  }

  if ( localStorage.filterMemory_employer ) {
    filterMemory_employer              = JSON.parse(localStorage.filterMemory_employer);
    filterMemory_employer[tableMarker] = {};
    localStorage.filterMemory_employer = JSON.stringify(filterMemory_employer);
  }

  // скидання фільтрів
  $($('#employerSelect + input')[0]).val('');
  $('#date-start').val('');
  $('#date-end').val('');
  $('.filters-label-wrapper select option').attr('selected','').removeAttr('selected');

  // видалення маркерів
  $('#filter-markers-panel').css({'display':'none'});
  $('.filter-marker').remove();

  // приховати кнопку "скинути усі фільтри"
  toggleClearFiltersBtn ();
});
/* ↑↑↑ /click on clear-filters-btn ↑↑↑ */
/* ↑↑↑ /WORK WITH LOCALSTORAGE (FILTERS) ↑↑↑ */

// перевірка кількості збережених фільтрів після завантаження сторінки
toggleClearFiltersBtn ();

/* ↑↑↑ FILTERS ↑↑↑ */
/* ↑↑↑ /WORK WITH LOCALSTORAGE ↑↑↑ */

/* ↓↓↓ FUNCTIONS DECLARATIONS ↓↓↓ */
function addFilterMarker(innerText, parentID) {
  var innerText = innerText,
      parentID  = parentID,
      dataAttr  = false;

  if (arguments[2] == 'start') {
    innerText = 'c ' + innerText;
    dataAttr = true;
  }
  if (arguments[2] == 'end') {
    innerText = 'по ' + innerText;
    dataAttr = true;
  }
  if (arguments[2] == 'startEnd') {
    innerText = 'c ' + JSON.parse(localStorage.filterMemory_dateStart)[tableMarker] + ' по ' + JSON.parse(localStorage.filterMemory_dateEnd)[tableMarker];
    dataAttr = true;
  }

  $('#filter-markers-panel').css({'display':'block'});

  $('#filter-markers-panel').append('<span class="filter-marker" data-parent-ID="' + parentID + '" data-filter-time="' + dataAttr + '">' + innerText +'\
                                       <span class="filter-marker-close-btn" onclick=removeParent(this)>\
                                         <i class="fas fa-times"></i>\
                                       </span>\
                                     </span>');
}

function toggleClearFiltersBtn() {
  if ( $('.filter-marker').length >= 2 ) {
    // показати кнопку
    $('#clear-filters-btn').css({'right':'3px', 'display':'block'});
  } else if ( $('.filter-marker').length == 1 ) {
    // приховати кнопку
    $('#clear-filters-btn').css({'right':'-200px', 'display':'block'});
  } else {
    // приховати кнопку і панель маркерів фільтрів
    $('#clear-filters-btn').css({'right':'-200px', 'display':'block'});
    $('#filter-markers-panel').css({'display':'none'});
  }
}

function isObjectEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
/* ↑↑↑ FUNCTIONS DECLARATIONS ↑↑↑ */

$('#option-panel-refresh').click(function(){
  $('#searchId, #searchEmail, #searchName, #searchPhone').val('');
});