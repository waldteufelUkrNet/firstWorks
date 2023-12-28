var resultArr = [];
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
});

$(document).ready(function() {

  var chart1 = Highcharts.stockChart({
    chart         : {
      renderTo    : 'container',
      events      : {
        load      : function () {
          var series = this.series[0];
          setInterval(function () {
            $.getJSON('http://stock.peoplesender.info:9000/api/Stock?timer=realOne&symbol=BTCETH', function (data) {

              //[{"Symbol":"Symbol","Value":"Value","Date":"Date"}] -> [Date,Value]
              var arr2 = data;
              var tempArr2 = [];
              tempArr2.push(arr2[0].Date);
              tempArr2.push(arr2[0].Value);
              // console.log(tempArr2);
              // console.log(tempArr2[0]);
        //   var vara = resultArr[resultArr.length-1][0];
        //   console.log("vara", typeof vara);
              var x = (new Date(arr2[0].Date)).getTime(), // current time
                y = arr2[0].Value;
              series.addPoint([x, y], true, true);
              //console.log("[x, y]", [x, y]);
            });
          }, 1000);
        }
      }
    },
    title         : { text: 'BTC/ETH' },
    //subtitle      : { text: 'Підзаголовок' },
    navigator     : { enabled: false },
    scrollbar     : { enabled: false },
    rangeSelector : {
      buttons     : [{count:  5, type: 'minute', text:  '5m' },
                    { count: 10, type: 'minute', text: '10m' },
                    { count: 15, type: 'minute', text: '15m' },
                    { count: 30, type: 'minute', text: '30m' },
                    { count: 45, type: 'minute', text: '45m' },
                    { count: 60, type: 'minute', text: '60m' }
      ],
      inputEnabled: true,
      selected    : 0
    },

    xAxis            : {
      gridLineWidth  : 1,
      title          : { text: 'параметр осі x' },
      scrollbar      : { enabled: false },
      //tickInterval   : 12,
      //tickAmount     : 12,
      crosshair      : true,
      // type           : 'datetime',
      // dateTimeLabelFormats: {
      //   hour: '%H:%M'
      // },
      tickmarkPlacement: 'on',
      labels: {
        formatter: function() {
          // var tempHours = resultArr[this.value][0].getHours();
          // if (tempHours < 10) {tempHours = '0' + tempHours}
          // var tempMinutes = resultArr[this.value][0].getMinutes();
          // if (tempMinutes < 10) {tempMinutes = '0' + tempMinutes}
          // this.value = tempHours + ':' + tempMinutes;
          return this.value;
        }
      }
    },

    yAxis       : {
      gridLineWidth   : 1,
        title         : { text: 'параметр осі у' },
        scrollbar     : { enabled: false },
        crosshair     : true
    },

    series      : [{
      name      : 'котировка BTC/ETH',
      data      : resultArr,
      type      : 'spline',
      showInNavigator : false,
      //pointStart: Date.UTC(2018, 6, 1),
      //pointInterval   : 3600 * 1000,
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