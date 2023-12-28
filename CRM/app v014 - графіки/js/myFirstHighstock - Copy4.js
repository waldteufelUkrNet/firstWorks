var resultArr = [];
var startTime,
    lastPoint,
    YPlotLinesValue;

$.getJSON('http://stock.peoplesender.info:9000/api/Stock?timer=5&symbol=BTCETH', function (data) {

  // [{...},{...},{...}] -> [[...],[...],[...]]
  var arr = data;

  for (var i = 0; i < arr.length; i++) {
  var tempArr = [];
  for (var key in arr[i]) {
    tempArr.push(arr[i][key]);
  }
  // string 'date' -> Date
  tempArr[0] = new Date(tempArr[0]);
  resultArr.push(tempArr);
  }
  //console.log("resultArr", resultArr);
  //console.log(resultArr[143][0].toDateString());
  pointStart = resultArr[0];
  startTime = pointStart[0].getTime();
});


$(document).ready(function() {

  var chart = Highcharts.stockChart({
    chart                  : {
      renderTo             : 'container',
      events               : {
        load               :  function () {
                                var series = this.series[0];
                                setInterval(function () {
                                  $.getJSON('http://stock.peoplesender.info:9000/api/Stock?timer=realOne&symbol=BTCETH', function (data) {
                                    var x = new Date(data[0].Date),
                                        y = data[0].Value;
                                    lastPoint = resultArr[resultArr.length-1];
                                    YPlotLinesValue = y;
                                    chart.yAxis[0].removePlotBand('plot-line-1');
                                    chart.yAxis[0].addPlotLine({
                                      color     : 'red',
                                      id        : 'plot-line-1',
                                      dashStyle : 'solid',
                                      width     : 1,
                                      zIndex    : 9999,
                                      label     : {
                                        text    : 'Last quarter minimum',
                                        color   : 'red'
                                      },
                                      value     : y
                                    });
                                    //console.log("YPlotLinesValue", YPlotLinesValue);
                                    var deltaTime = x.getTime() - lastPoint[0].getTime();
                                    if (deltaTime >= 5 * 60 * 1000) {
                                      series.addPoint([x, y], true, true);
                                      lastPoint = [x, y];
                                    }
                                    //console.log("[x, y]", [x, y]);
                                  });
                                }, 1000);
                              }
      }
    },
    title                  : { text: 'BTC/ETH' },
    data                   : { dataRefreshRate: 1 },
    navigator              : { enabled: false },
    scrollbar              : { enabled: false },
    rangeSelector          : {
      enabled              : false
    },

    xAxis                  : {
      gridLineWidth        : 1,
      scrollbar            : { enabled: false },
      crosshair            : true,
      type                 : 'datetime',
      dateTimeLabelFormats : {
        hour               : '%H:%M'
      },
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
      pointInterval        : 60 * 5 * 1000,
    }],
  });

});

Highcharts.theme = {
  colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
    '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
  chart: {
    backgroundColor: '#1d2a38',
    // backgroundColor: {
    //   linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    //   stops: [
    //     [0, '#2a2a2b'],
    //     [1, '#3e3e40']
    //   ]
    // },
    plotBorderColor: '#606063'
  },
  title: {
    style: {
      color: '#E0E0E3',
      textTransform: 'uppercase',
      fontSize: '20px'
    }
  },
  subtitle: {
    style: {
      color: '#E0E0E3',
      textTransform: 'uppercase'
    }
  },
  xAxis: {
    gridLineColor: '#707073',
    labels: {
      style: {
        color: '#E0E0E3'
      }
    },
    lineColor: '#707073',
    minorGridLineColor: '#505053',
    tickColor: '#707073',
    title: {
      style: {
        color: '#A0A0A3'
      }
    }
  },
  yAxis: {
    gridLineColor: '#707073',
    labels: {
      style: {
        color: '#E0E0E3'
      }
    },
    lineColor: '#707073',
    minorGridLineColor: '#505053',
    tickColor: '#707073',
    tickWidth: 1,
    title: {
      style: {
        color: '#A0A0A3'
      }
    }
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    style: {
      color: '#F0F0F0'
    }
  },
  plotOptions: {
    series: {
      dataLabels: {
        color: '#B0B0B3'
      },
      marker: {
        lineColor: '#333'
      },
      color: '#1E90FF'
    },
    boxplot: {
      fillColor: '#505053'
    },
    candlestick: {
      lineColor: 'white'
    },
    errorbar: {
      color: 'white'
    }
  },
  legend: {
    itemStyle: {
      color: '#E0E0E3'
    },
    itemHoverStyle: {
      color: '#FFF'
    },
    itemHiddenStyle: {
      color: '#606063'
    }
  },
  credits: {
    style: {
      color: '#666'
    }
  },
  labels: {
    style: {
      color: '#707073'
    }
  },

  drilldown: {
    activeAxisLabelStyle: {
      color: '#F0F0F3'
    },
    activeDataLabelStyle: {
      color: '#F0F0F3'
    }
  },

  navigation: {
    buttonOptions: {
      symbolStroke: '#DDDDDD',
      theme: {
        fill: '#505053'
      }
    }
  },

  // scroll charts
  rangeSelector: {
    buttonTheme: {
      fill: '#505053',
      stroke: '#000000',
      style: {
        color: '#CCC'
      },
      states: {
        hover: {
          fill: '#707073',
          stroke: '#000000',
          style: {
            color: 'white'
          }
        },
        select: {
          fill: '#000003',
          stroke: '#000000',
          style: {
            color: 'white'
          }
        }
      }
    },
    inputBoxBorderColor: '#505053',
    inputStyle: {
      backgroundColor: '#333',
      color: 'silver'
    },
    labelStyle: {
      color: 'silver'
    }
  },

  navigator: {
    handles: {
      backgroundColor: '#666',
      borderColor: '#AAA'
    },
    outlineColor: '#CCC',
    maskFill: 'rgba(255,255,255,0.1)',
    series: {
      color: '#7798BF',
      lineColor: '#A6C7ED'
    },
    xAxis: {
      gridLineColor: '#505053'
    }
  },

  scrollbar: {
    barBackgroundColor: '#808083',
    barBorderColor: '#808083',
    buttonArrowColor: '#CCC',
    buttonBackgroundColor: '#606063',
    buttonBorderColor: '#606063',
    rifleColor: '#FFF',
    trackBackgroundColor: '#404043',
    trackBorderColor: '#404043'
  },

  // special colors for some of the
  legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  background2: '#505053',
  dataLabelsColor: '#B0B0B3',
  textColor: '#C0C0C0',
  contrastTextColor: '#F0F0F3',
  maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);