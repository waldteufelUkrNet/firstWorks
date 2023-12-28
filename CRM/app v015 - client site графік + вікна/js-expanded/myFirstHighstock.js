var resultArr     = [],
    startTime,
    lastPoint,
    tempPoint,
    YPlotLinesStartValue,
    timeStep      = 5,
    dataArr5      = 'http://stock.peoplesender.info:9000/api/Stock?timer=5&symbol=BTCETH',
    dataArr10     = 'http://stock.peoplesender.info:9000/api/Stock?timer=10&symbol=BTCETH',
    dataArr15     = 'http://stock.peoplesender.info:9000/api/Stock?timer=15&symbol=BTCETH',
    dataArr30     = 'http://stock.peoplesender.info:9000/api/Stock?timer=30&symbol=BTCETH',
    dataArr45     = 'http://stock.peoplesender.info:9000/api/Stock?timer=45&symbol=BTCETH',
    dataArr60     = 'http://stock.peoplesender.info:9000/api/Stock?timer=60&symbol=BTCETH',

    dataArr       = dataArr5,
    dataOne       = 'http://stock.peoplesender.info:9000/api/Stock?timer=realOne&symbol=BTCETH';

// ↓↓↓ побудова графіку з масиву даних - 144 точки + 1 фікривна ↓↓↓
function getDataArr(){
  $.getJSON(dataArr, function (data) {

    resultArr  = [];
    pointStart = 0;
    startTime  = 0;
    YPlotLinesStartValue = 0;

    // [{...},{...},{...}] -> [[...],[...],[...]]
    var arr = data;
    YPlotLinesStartValue = arr[arr.length-1].Value;

    for (var i = 0; i < arr.length; i++) {
      var tempArr = [];
      for (var key in arr[i]) {          // arr[i] = {...}
        tempArr.push(arr[i][key]);       // temp = ['date', Value]
      }
      // string 'date' -> Date
      tempArr[0] = new Date(tempArr[0]); // temp = [Date, Value]
      resultArr.push(tempArr);           // resultArr = [[Date, Value],[Date, Value],...]
    }

    pointStart = resultArr[0];
    startTime  = pointStart[0].getTime();

    //YPlotLinesStartValue = resultArr[resultArr.length - 1][1]; - періодично не спрацьовує (не встигає)
  });
}
getDataArr();

$(document).ready(function() {

  var chart = Highcharts.stockChart({
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
                                      x         : -10,
                                      style     : {
                                      color     : 'white',
                                      fontSize  : '16px'
                                    }
                                  },
                                  value         : YPlotLinesStartValue
                                });

                                setInterval(function () {
                                  $.getJSON(dataOne, function (data) { // data = [{Sumbol,Value,'date'}]

                                    var x = new Date(data[0].Date) ,
                                        y = data[0].Value;

                                        lastPoint = resultArr[143];
                                        tempPoint = [x,y];
                                        resultArr[144] = tempPoint;

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
                                          x         : -10,
                                          style     : {
                                          color     : 'white',
                                          fontSize  : '16px'
                                        }
                                      },
                                      value         : y
                                    });

                                    var deltaTime = x.getTime() - lastPoint[0].getTime();
                                    if (deltaTime >= timeStep * 60 * 1000) {
                                      resultArr.shift();
                                      lastPoint = tempPoint;
                                      resultArr.push(tempPoint);
                                    }

                                    chart.series[0].remove();
                                    chart.addSeries({
                                      name                 : 'BTC/ETH',
                                      data                 : resultArr,
                                      type                 : 'spline',
                                      showInNavigator      : false,
                                      pointStart           : startTime,
                                      pointInterval        : timeStep * 60 * 1000
                                    }, false);
                                    chart.redraw();

                                  });
                                }, 1000);
                              }
      }
    },
    title                  : { text: 'BTC/ETH' },
    data                   : { dataRefreshRate: 1 },
    navigator              : { enabled: false },
    scrollbar              : { enabled: false },
    rangeSelector          : { enabled: false },

    xAxis                  : {
      gridLineWidth        : 1,
      scrollbar            : { enabled: false },
      crosshair            : true,
      type                 : 'datetime',
      dateTimeLabelFormats : { hour : '%H:%M' },
      tickmarkPlacement    : 'on',
    },

    yAxis                  : {
      gridLineWidth        : 1,
      scrollbar            : { enabled: false },
      crosshair            : true,
    },

    series                 : [{
      name                 : 'BTC/ETH',
      data                 : resultArr,
      type                 : 'spline',
      showInNavigator      : false,
      pointStart           : startTime,
      pointInterval        : 5 * 60 * 1000,
    }]
  });

  // remove "Highcharts.com"-marker
  setTimeout(function(){
    $('.highcharts-credits').remove();
  },4);
  // ↑↑↑ побудова графіку з масиву даних - 144 точки + 1 фікривна ↑↑↑

  // ↓↓↓ поведінка кнопок (переключення часу) ↓↓↓
  $('.timer-buttons-li').click(function(){

    var arrOfTimerBtns = $('.timer-buttons-li');
    for (var i = 0; i < arrOfTimerBtns.length; i++) {
      $(arrOfTimerBtns[i]).removeClass('timer-buttons-li_active');
      $(this).addClass('timer-buttons-li_active');
    }

    var time = +$(this).attr('data-time');
    timeStep = time;

    switch (time) {
      case 5:
               dataArr = dataArr5;
               getDataArr();
               break;
      case 10:
               dataArr = dataArr10;
               getDataArr();
               break;
      case 15:
               dataArr = dataArr15;
               getDataArr();
               break;
      case 30:
               dataArr = dataArr30;
               getDataArr();
               break;
      case 45:
               dataArr = dataArr45;
               getDataArr();
               break;
      case 60:
               dataArr = dataArr60;
               getDataArr();
               break;
    }

  });
  // ↑↑↑ поведінка кнопок (переключення часу) ↑↑↑

});

Highcharts.theme = {
  colors                  : ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
  chart                   : {
    backgroundColor       : '#1d2a38',
    plotBorderColor       : '#606063',
    spacingRight          : 40
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
    gridLineColor         : '#707073',
    labels                : {
      style               : { color: '#E0E0E3' }
    },
    lineColor             : '#707073',
    minorGridLineColor    : '#505053',
    tickColor             : '#707073',
    title                 : { color: '#A0A0A3' }
  },
  yAxis                   : {
    gridLineColor         : '#707073',
    labels                : {
      style               : { color: '#E0E0E3' },
      align               : 'right',
      x                   : 50,
      y                   : 0
    },
    lineColor             : '#707073',
    minorGridLineColor    : '#505053',
    tickColor             : '#707073',
    tickWidth             : 1,
    title                 : {
      style               : { color: '#A0A0A3' }
    }
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