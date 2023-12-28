var resultArr       = [],
    startTime,
    pointStart,
    lastPoint,
    tempPoint,
    YPlotLinesStartValue,
    // dataArr60       = 'http://stock.peoplesender.info:9000/api/Stock?timer=60&symbol=BTCETH',
    // dataArr60candle = 'http://stock.peoplesender.info:9000/api/StockOhlc?timer=60&symbol=BTCETH',
    stringType      = '?',
    stringSymbol    = 'BTCETH',
    nameOfChart     = 'BTC/ETH',
    dataType        = 'spline',
    timeStep        = 5,
    dataArr         = 'http://stock.peoplesender.info:9000/api/Stock' + stringType + 'timer=' + timeStep + '&symbol=' + stringSymbol,
    dataOne         = 'http://stock.peoplesender.info:9000/api/Stock?timer=realOne&symbol=' + stringSymbol;

// ↓↓↓ побудова графіку з масиву даних - 144 точки + 1 фікривна ↓↓↓
getDataArr();

setTimeout(function(){
  chart = Highcharts.stockChart({
    chart                  : {
      renderTo             : 'container',
      events               : {
        load               :  function () {
                                var series = this.series[0];

                                this.yAxis[0].addPlotLine({
                                  color         : 'red',
                                  id            : 'plot-line-1',
                                  dashStyle     : 'solid',
                                  width         : 1,
                                  zIndex        : 9999,
                                  label         : {
                                    text        : YPlotLinesStartValue.toFixed(5),
                                      textAlign : 'right',
                                      align     : 'right',
                                      x         : 60,
                                      y         : 3,
                                      style     : {
                                      color     : 'white',
                                      fontSize  : '11px'
                                    }
                                  },
                                  value         : YPlotLinesStartValue
                                });
                                setInterval(function () {
                                  $.getJSON(dataOne, function (data) { // data = [{Sumbol,Value,'date'}]
                                    var x = new Date(data[0].Date),
                                        y = data[0].Value;
                                    lastPoint = resultArr[143];

                                    chart.yAxis[0].removePlotLine('plot-line-1');
                                    chart.yAxis[0].addPlotLine({
                                      color         : 'red',
                                      id            : 'plot-line-1',
                                      dashStyle     : 'solid',
                                      width         : 1,
                                      zIndex        : 9999,
                                      label         : {
                                        text        : y.toFixed(5),
                                          textAlign : 'right',
                                          align     : 'right',
                                          x         : 60,
                                          y         : 3,
                                          style     : {
                                          color     : 'white',
                                          fontSize  : '11px'
                                        }
                                      },
                                      value         : y
                                    });

                                    if (dataType == 'spline') {

                                      tempPoint = [x,y];
                                      resultArr[144] = tempPoint;

                                    } else if (dataType == 'candlestick' || dataType == 'ohlc') {

                                      if (tempPoint == null) {
                                        tempPoint = [x, y, y, y, y]; // tempPoint = [x, open, high, low, close];
                                      }
                                      tempPoint[0] = x;
                                      if (tempPoint[2] < y) { tempPoint[2] = y }
                                      if (tempPoint[3] > y) { tempPoint[3] = y }
                                      tempPoint[4] = y;

                                      resultArr[144] = tempPoint;

                                    } else {
                                      alert('dataType is not "spline", "candlestick" or "ohlc"')
                                    }

                                    var deltaTime = x.getTime() - lastPoint[0].getTime();

                                    if (deltaTime >= timeStep * 60 * 1000) {

                                      resultArr.shift();
                                      lastPoint = tempPoint;
                                      resultArr.push(tempPoint);
                                      tempPoint = null;
                                    }
                                    redrawChart ();
                                  });
                                }, 1000);
                              }
      }
    },
    title                  : { text: nameOfChart },
    data                   : { dataRefreshRate: 1 },
    navigator              : { enabled: false },
    scrollbar              : { enabled: false },
    rangeSelector          : { enabled: false },

    series                 : [{
      name                 : nameOfChart,
      data                 : resultArr,
      type                 : dataType,
      showInNavigator      : false,
      pointStart           : startTime,
      pointInterval        : timeStep * 60 * 1000,
    }]
  });

  // remove "Highcharts.com"-marker
  setTimeout(function(){
    $('.highcharts-credits').remove();
  },4);
  // ↑↑↑ побудова графіку з масиву даних - 144 точки + 1 фікривна ↑↑↑

  // ↓↓↓ type/time-switch-buttons behavior ↓↓↓
  var arrOfTimerBtns = $('.timer-buttons-li');
  var arrOfTypeBtns  = $('.type-buttons-li');

  $('.type-buttons-li').click(function(){

    // type-buttons highlighting
    for (var i = 0; i < arrOfTypeBtns.length; i++) {
      $(arrOfTypeBtns[i]).removeClass('type-buttons-li_active');
      $(this).addClass('type-buttons-li_active');
      dataType = $(this).attr('data-type');
    }

    // time-buttons highlighting
    if (dataType == 'candlestick' || dataType == 'ohlc') {

      for (var i = 0; i < arrOfTimerBtns.length; i++) {
        if ($(arrOfTimerBtns[i]).attr('data-time') != '30' && $(arrOfTimerBtns[i]).attr('data-time') != '60') {
            if ($(arrOfTimerBtns[i]).hasClass('timer-buttons-li_active')) {
              $(arrOfTimerBtns[3]).addClass('timer-buttons-li_active');
              timeStep = 30;
            }
          $(arrOfTimerBtns[i]).css({'display':'none'}).removeClass('timer-buttons-li_active');
        }
      }
      stringType = 'Ohlc?';
    } else {
      for (var i = 0; i < arrOfTimerBtns.length; i++) {
        $(arrOfTimerBtns[i]).css({'display':'inline-block'});
      }
      stringType = '?';
    }

    getDataArr();
  });

  $('.timer-buttons-li').click(function(){
    for (var i = 0; i < arrOfTimerBtns.length; i++) {
      $(arrOfTimerBtns[i]).removeClass('timer-buttons-li_active');
      $(this).addClass('timer-buttons-li_active');
    }
    timeStep = +$(this).attr('data-time');

    getDataArr();
  });
  // ↑↑↑ type/time-switch-buttons behavior ↑↑↑
},1000);

// ↓↓↓ functions declarations ↓↓↓
function getDataArr(){

  dataArr = 'http://stock.peoplesender.info:9000/api/Stock' + stringType + 'timer=' + timeStep + '&symbol=' + stringSymbol;
  $.getJSON(dataArr, function (data) {

    resultArr  = [];
    pointStart = 0;
    startTime  = 0;
    YPlotLinesStartValue = 0;

    if (dataType == 'spline') {
      YPlotLinesStartValue = data[data.length-1].Value;

      // [{...},{...},{...}] -> [[...],[...],[...]]
      for (var i = 0; i < data.length; i++) {
        var tempArr = [];
        var tempTime = new Date(data[i].Date);
        tempArr.push(tempTime);
        tempArr.push(data[i].Value);
        resultArr.push(tempArr);
      }
      resultArr.push(resultArr[143]);

    } else if (dataType == 'candlestick' || dataType == 'ohlc') {

      YPlotLinesStartValue = data[data.length-1].Open;

      // [{'DateOpen':'date1', 'DateClose':'date2', 'Open':'number1', 'Hight':'number2', 'Low':'number3', 'Close':'number4'}, {...},{...}]
      // -> -> -> -> ->
      // [[date2, number1, number2, number3, number4],[...],[...]]

      for (var i = 0; i < data.length; i++) {
        var tempArr = [];
        var tempTime = new Date(data[i].DateClose);
        tempArr.push(tempTime);
        tempArr.push(data[i].Open);
        tempArr.push(data[i].Hight);
        tempArr.push(data[i].Low);
        tempArr.push(data[i].Close);
        resultArr.push(tempArr);
      }
      resultArr.push(resultArr[143]);
    } else {
      alert('dataType is not "spline", "candlestick" or "ohlc"')
    }
    pointStart = resultArr[0];
    startTime  = pointStart[0].getTime();

    redrawChart ();
  });
}

function redrawChart () {
  chart.series[0].remove();
  chart.addSeries({
    name                 : nameOfChart,
    data                 : resultArr,
    type                 : dataType,
    showInNavigator      : false,
    pointStart           : startTime,
    pointInterval        : timeStep * 60 * 1000
  }, false);

  chart.redraw();
  $('.highcharts-point-down').attr('fill','red');
  $('.highcharts-point-up').attr('fill','dodgerblue');
  $('.highcharts-point-down').attr('stroke','red');
  $('.highcharts-point-up').attr('stroke','dodgerblue');
}
// ↑↑↑ functions declarations ↑↑↑

Highcharts.theme = {
  colors                  : ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
  chart                   : {
    backgroundColor       : '#1d2a38',
    plotBorderColor       : '#606063',
    spacingRight          : 60,
    spacingLeft           : 0
  },
  title                   : {
    style                 : {
      color               : '#E0E0E3',
      textTransform       : 'uppercase',
      fontSize            : '20px'
    }
  },
  subtitle                : {
    style                 : {
      color               : '#E0E0E3',
      textTransform       : 'uppercase'
    }
  },
  xAxis                   : {
    gridLineColor         : 'rgba(111, 111, 115, 0.2)',
    labels                : {
      style               : { color: '#E0E0E3' }
    },
    lineColor             : 'rgba(111, 111, 115, 0.2)',
    minorGridLineColor    : '#505053',
    tickColor             : 'rgba(111, 111, 115, 0.2)',
    title                 : { color: '#A0A0A3' },
    gridLineWidth         : 1,
    scrollbar             : { enabled: false },
    crosshair             : true,
    type                  : 'datetime',
    dateTimeLabelFormats  : { hour : '%H:%M' },
    tickmarkPlacement     : 'on',
  },
  yAxis                   : {
    gridLineWidth         : 1,
    gridLineColor         : 'rgba(111, 111, 115, 0.2)',
    labels                : {
      style               : { color: '#E0E0E3' },
      align               : 'right',
      x                   : -20,
      y                   : 4
    },
    lineColor             : 'rgba(111, 111, 115, 0.2)',
    minorGridLineColor    : 'rgba(111, 111, 115, 0.2)',
    tickColor             : 'rgba(111, 111, 115, 0.2)',
    tickWidth             : 1,
    title                 : {
      style               : { color: '#A0A0A3' }
    },
    scrollbar             : { enabled: false },
    crosshair             : true,
    opposite              : false
  },
  tooltip                 : {
    backgroundColor       : 'rgba(0, 0, 0, 0.85)',
    style: { color        : '#F0F0F0' }
  },
  plotOptions             : {
    series                : {
      dataLabels          : { color: '#B0B0B3' },
      marker              : { lineColor: '#333' },
      color               : '#1E90FF'
    },
    boxplot               : { fillColor: '#505053' },
    candlestick           : { lineColor: 'white' },
    errorbar              : { color: 'white' }
  },
  legend                  : {
    itemStyle             : { color: '#E0E0E3' },
    itemHoverStyle        : { color: '#FFF' },
    itemHiddenStyle       : { color: '#606063' }
  },
  credits                 : {
    style                 : { color: '#666' }
  },
  labels                  : {
    style                 : { color: '#707073' }
  },

  drilldown               : {
    activeAxisLabelStyle  : { color: '#F0F0F3' },
    activeDataLabelStyle  : { color: '#F0F0F3' }
  },

  navigation              : {
    buttonOptions         : {
      symbolStroke        : '#DDDDDD',
      theme               : { fill: '#505053' }
    }
  },

  // scroll charts
  rangeSelector           : {
    buttonTheme           : {
      fill                : '#505053',
      stroke: '#000000',
      style               : { color: '#CCC' },
      states              : {
        hover             : {
          fill            : '#707073',
          stroke          : '#000000',
          style           : { color: 'white' }
        },
        select            : {
          fill            : '#000003',
          stroke          : '#000000',
          style           : { color: 'white' }
        }
      }
    },
    inputBoxBorderColor   : '#505053',
    inputStyle            : {
      backgroundColor     : '#333',
      color               : 'silver'
    },
    labelStyle            : { color: 'silver' }
  },

  navigator               : {
    handles               : {
      backgroundColor     : '#666',
      borderColor         : '#AAA'
    },
    outlineColor          : '#CCC',
    maskFill              : 'rgba(255,255,255,0.1)',
    series: {
      color               : '#7798BF',
      lineColor           : '#A6C7ED'
    },
    xAxis                 : { gridLineColor: '#505053' }
  },

  scrollbar               : {
    barBackgroundColor    : '#808083',
    barBorderColor        : '#808083',
    buttonArrowColor      : '#CCC',
    buttonBackgroundColor : '#606063',
    buttonBorderColor     : '#606063',
    rifleColor            : '#FFF',
    trackBackgroundColor  : '#404043',
    trackBorderColor      : '#404043'
  },

  // special colors for some of the
  legendBackgroundColor   : 'rgba(0, 0, 0, 0.5)',
  background2             : '#505053',
  dataLabelsColor         : '#B0B0B3',
  textColor               : '#C0C0C0',
  contrastTextColor       : '#F0F0F3',
  maskColor               : 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);