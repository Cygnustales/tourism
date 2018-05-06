import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  options: any;
  trees: any;
  treess: any;
  lokasi: any = 0;
  ytd: any = 0;
  line1: any;
  line2: any;
  jam: any;
  visit: any;
  fav: any;
  sos: any;
  params: any;
  geo: any;

  month = [{
    0 : [8, 7, 8, 6, 4, 10, 11, 9, 5, 13, 5, 15],
    1: [8, 8, 12, 8, 8, 8, 10, 7, 8, 9, 6, 8],
    2: [12, 5, 7, 12, 11, 12, 7, 5, 7, 8, 9, 4],
    3: [11, 8, 9, 9, 4, 12, 10, 5, 6, 11, 6, 11],
    4: [5, 5, 10, 8, 7, 9, 10, 7, 12, 3, 12, 11],
    5: [4, 5, 11, 9, 8, 10, 4, 5, 8, 13, 12, 11],
    6: [5, 5, 15, 15, 8, 10, 12, 4, 6, 6, 8, 7],
    7: [13, 7, 4, 7, 7, 7, 5, 11, 12, 11, 7, 7],
    8: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    9: [9, 11, 7, 11, 7, 6, 7, 12, 11, 8, 7, 6],
    10 : [8, 7, 8, 6, 4, 10, 11, 9, 5, 13, 5, 15],
    11: [8, 8, 12, 8, 8, 8, 10, 7, 8, 9, 6, 8],
    12: [12, 5, 7, 12, 11, 12, 7, 5, 7, 8, 9, 4],
    13: [11, 8, 9, 9, 4, 12, 10, 5, 6, 11, 6, 11],
    14: [5, 5, 10, 8, 7, 9, 10, 7, 12, 3, 12, 11],
    15: [4, 5, 11, 9, 8, 10, 4, 5, 8, 13, 12, 11],
    16: [5, 5, 15, 15, 8, 10, 12, 4, 6, 6, 8, 7],
    17: [13, 7, 4, 7, 7, 7, 5, 11, 12, 11, 7, 7],
  }];

  opt = [{
    0 : [8, 7, 8, 6, 6, 13, 16, 12, 7, 18, 8, 19],
    1: [8, 8, 12, 8, 11, 10, 15, 9, 11, 12, 10, 12],
    2: [12, 5, 7, 12, 16, 16, 10, 6, 10, 12, 14, 6],
    3: [11, 8, 9, 9, 5, 16, 15, 6, 8, 15, 9, 17],
    4: [5, 5, 10, 8, 10, 11, 15, 9, 17, 4, 19, 17],
    5: [4, 5, 11, 9, 11, 13, 6, 6, 11, 18, 18, 17],
    6: [5, 5, 15, 15, 11, 13, 18, 5, 8, 8, 12, 10],
    7: [13, 7, 4, 7, 10, 9, 8, 14, 17, 16, 11, 11],
    8: [13, 7, 6, 12, 9, 17, 8, 11, 7, 9, 19, 7],
    9: [9, 11, 7, 11, 9, 8, 10, 15, 15, 12, 11, 9],
    10 : [8, 7, 8, 6, 6, 13, 16, 12, 7, 18, 8, 19],
    11: [8, 8, 12, 8, 11, 10, 15, 9, 11, 12, 10, 12],
    12: [12, 5, 7, 12, 16, 16, 10, 6, 10, 12, 14, 6],
    13: [11, 8, 9, 9, 5, 16, 15, 6, 8, 15, 9, 17],
    14: [5, 5, 10, 8, 10, 11, 15, 9, 17, 4, 19, 17],
    15: [4, 5, 11, 9, 11, 13, 6, 6, 11, 18, 18, 17],
    16: [5, 5, 15, 15, 11, 13, 18, 5, 8, 8, 12, 10],
    17: [13, 7, 4, 7, 10, 9, 8, 14, 17, 16, 11, 11],
  }];

  route = [{
    0: [77, 13, 6, 4],
    1: [70, 15, 10, 5],
    2: [68, 13, 10, 9],
    3: [72, 17, 10, 1],
    4: [72, 13, 9, 6],
    5: [78, 9, 8, 5],
    6: [75, 13, 4, 8],
    7: [73, 13, 8, 6],
    8: [77, 14, 5, 4],
    9: [68, 21, 9, 2],
    10: [68, 20, 6, 6],
    11: [72, 18, 6, 4],
    12: [76, 9, 8, 7],
    13: [77, 9, 7, 7],
    14: [67, 19, 5, 9],
    15: [74, 15, 10, 1],
    16: [71, 20, 4, 5],
    17: [74, 16, 9, 1],
  }];

  social = [{
    0: [5.00],
    1: [4.38],
    2: [4.06],
    3: [3.44],
    4: [5.00],
    5: [3.75],
    6: [4.69],
    7: [3.75],
    8: [5.00],
    9: [3.75],
    10: [3.75],
    11: [4.69],
    12: [5.00],
    13: [4.31],
    14: [4.69],
    15: [4.31],
    16: [5.00],
    17: [3.44],
  }];
  spot = [{
    0: 10855,
    1: 131,
    2: 105,
    3: 75,
    4: 67,
    5: 62,
    6: 57,
    7: 49,
    8: 49,
    9: 43,
    10: 150,
    11: 2557,
    12: 1963,
    13: 1802,
    14: 755,
    15: 403,
    16: 383,
    17: 262,
  }];
  ytds = [{
    0: [10855, 2280, 2062, 2714, 2497, 1303],
    1: [131
    , 28
    , 25
    , 33
    , 30
    , 16],
    2: [105
    , 22
    , 20
    , 26
    , 24
    , 13],
    3: [75
    , 16
    , 14
    , 19
    , 17
    , 9],
    4: [67
    , 14
    , 13
    , 17
    , 15
    , 8],
    5: [62
    , 13
    , 12
    , 16
    , 14
    , 7],
    6: [57
    , 12
    , 11
    , 14
    , 13
    , 7],
    7: [49
    , 10
    , 9
    , 12
    , 11
    , 6],
    8: [49
    , 10
    , 9
    , 12
    , 11
    , 6],
    9: [43
    , 9
    , 8
    , 11
    , 10
    , 5],
    10: [2557
    , 537
    , 486
    , 639
    , 588
    , 307],
    11: [1963
    , 412
    , 373
    , 491
    , 452
    , 236],
    12: [1802
    , 378
    , 342
    , 451
    , 414
    , 216],
    13: [755
    , 159
    , 143
    , 189
    , 174
    , 91],
    14: [403
    , 85
    , 77
    , 101
    , 93
    , 48],
    15: [383
    , 80
    , 73
    , 96
    , 88
    , 46],
    16: [262
    , 55
    , 50
    , 65
    , 60
    , 31],
    17: [1943
    , 408
    , 369
    , 486
    , 447
    , 233]
  }];

  constructor(private routes: Router) { }

  ngOnInit() {
    this.treeOne();
    this.treeTwo();
    this.loadHours();
    this.visitor();
    this.setYtd(0);
  }

  lebar(w) {
    const l = Number( w * 18);
    return l;
  }

  loadHours() {
    const num = this.lokasi;
    this.line1 = this.month[0][num];
    this.line2 = this.opt[0][num];
    this.fav = this.route[0][num];
    this.sos = this.social[0][num];
    this.line();
    this.hour();
  }

  setLocation(event) {
    this.lokasi = event;
    console.log(event);
    this.loadHours();
  }
  setYtd(event) {
    this.ytd = event;
    const d = this.ytds[0][this.lokasi];
    this.geo = d[this.ytd];
  }

  onChartClick(event) {
    // console.log(event.dataIndex);
    // console.log(event.seriesName);
    const cnt = event.name;
    const country = cnt.replace(' ', '');
    this.routes.navigateByUrl('/action?a=' + event.dataIndex + '&i=' + event.seriesName);
  }

  hour() {
    this.options = {
      title : {
          show: false,
          text: 'Yogyakarta',
          textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: 'gray'
        },
      },
      tooltip : {
          trigger: 'axis'
      },
      color: ['green', 'red', 'blue', 'orange'],
      legend: {
          bottom: 'bottom',
          data: ['Belanda', 'Malaysia', 'Jepang', 'Domestic'],
          textStyle: {
            color: 'grey',
          },
      },
      toolbox: {
          show : true,
          showTitle: false,
          feature : {
              mark : {show: false},
              dataView : {show: false, readOnly: false},
              magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore : {show: true, title : 'Original'},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              axisLine: {
                lineStyle: {
                  color: 'lightGrey',
                },
              },
              splitLine: {
                lineStyle: {
                  color: '#f1f1f1',
                },
              },
              axisLabel: {
                textStyle: {
                  color: 'grey',
                },
              },
              boundaryGap : false,
              data :  ['01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00',
              '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00', '22.00', '23.00', '00.00'],
          }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'lightGrey',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#f1f1f1',
            },
          },
          axisLabel: {
            textStyle: {
              color: 'grey',
            },
          },
        },
      ],
      series : [
          {
              name: 'Belanda',
              type: 'line',
              smooth: true,
              data: [0, 0, 0, 2, 3, 3, 4, 5, 7, 13, 12, 10, 7, 3, 2, 2, 1, 0],
              markPoint : {
                symbol: 'pin',
                symbolSize: 35,
                data : [
                  {type : 'max', name: 'Peak'}
                ]
              },
          },
          {
              name: 'Malaysia',
              type: 'line',
              smooth: true,
              data: [1, 0, 0, 0, 1, 1, 2, 3, 3, 4, 6, 8, 12, 14, 11, 8, 4, 0],
              markPoint : {
                symbol: 'pin',
                symbolSize: 35,
                data : [
                  {type : 'max', name: 'Peak'}
                ]
              },
          },
          {
              name: 'Jepang',
              type: 'line',
              smooth: true,
              data: [1, 0, 1, 1, 2, 3, 3, 5, 7, 8, 11, 7, 2, 3, 5, 6, 7, 0],
              markPoint : {
                symbol: 'pin',
                symbolSize: 35,
                data : [
                  {type : 'max', name: 'Peak'}
                ]
              },
          },
          {
              name: 'Domestic',
              type: 'line',
              smooth: true,
              data: [5, 2, 1, 1, 1, 4, 5, 7, 9, 9, 9, 5, 3, 2, 2, 1, 1, 0],
              markPoint : {
                symbol: 'pin',
                symbolSize: 35,
                data : [
                  {type : 'max', name: 'Peak'}
                ]
              },
          }
      ]
  };
}

line() {
  console.log(this.line1);
  this.jam = {
    title : {
        show: false,
        text: 'Yogyakarta',
        textStyle: {
          fontSize: 18,
          fontWeight: 'normal',
          color: 'gray'
      },
    },
    tooltip : {
        trigger: 'axis'
    },
    color: ['green', 'red'],
    legend: {
        bottom: 'bottom',
        data: ['Visit %', 'Optimized Visit %'],
        textStyle: {
          color: 'grey',
        },
    },
    toolbox: {
        show : true,
        showTitle: false,
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true, title : 'Original'},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            axisLine: {
              lineStyle: {
                color: 'lightGrey',
              },
            },
            splitLine: {
              lineStyle: {
                color: '#f1f1f1',
              },
            },
            axisLabel: {
              textStyle: {
                color: 'grey',
              },
            },
            boundaryGap : false,
            data : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'lightGrey',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#f1f1f1',
          },
        },
        axisLabel: {
          textStyle: {
            color: 'grey',
          },
        },
      },
    ],
    series : [
        {
            name: 'Visit %',
            type: 'line',
            smooth: true,
            data: this.line1
        },
        {
            name: 'Optimized Visit %',
            type: 'line',
            lineStyle: {
              type: 'dashed'
            },
            smooth: true,
            data: this.line2
        }
    ]
};
}

visitor() {
  this.visit = {
    title : {
        show: false,
        text: 'Yogyakarta',
        textStyle: {
          fontSize: 18,
          fontWeight: 'normal',
          color: 'gray'
      },
    },
    tooltip : {
        trigger: 'axis'
    },
    color: ['green', 'red', 'blue'],
    legend: {
        bottom: 'bottom',
        data: ['Mancanegara', 'Domestic', 'Total'],
        textStyle: {
          color: 'grey',
        },
    },
    toolbox: {
        show : true,
        showTitle: false,
        feature : {
            mark : {show: false},
            dataView : {show: false, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true, title : 'Original'},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            splitArea: {
              show: true,
              areaStyle: {
               color: ['rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)',
               'rgba(255,0,0,0.0)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)',
               'rgba(0,0,0,.2)']
               }
             },
            axisLine: {
              lineStyle: {
                color: 'lightGrey',
              },
            },
            splitLine: {
              lineStyle: {
                color: '#f1f1f1',
              },
            },
            axisLabel: {
              textStyle: {
                color: 'grey',
              },
            },
            boundaryGap : false,
            data :  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        {
          type : 'category',
          splitArea: {
            show: true,
            areaStyle: {
             color: ['rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)',
             'rgba(255,0,0,0.0)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.2)',
             'rgba(0,0,0,.2)']
             }
           },
          axisLine: {
            lineStyle: {
              color: 'lightGrey',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#f1f1f1',
            },
          },
          axisLabel: {
            textStyle: {
              color: 'grey',
            },
          },
          boundaryGap : false,
          data :  ['', '', '', '', '', '', 'Prediction', 'Prediction', 'Prediction', 'Prediction', 'Prediction', 'Prediction']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'lightGrey',
          },
        },
        splitLine: {
          lineStyle: {
            color: '#f1f1f1',
          },
        },
        axisLabel: {
          textStyle: {
            color: 'grey',
          },
        },
      },
    ],

    series : [
        {
            name: 'Mancanegara',
            type: 'line',
            smooth: true,
            data: [39550
              , 47179
              , 50843
              , 61697
              , 71063
              , 77329
              , 85083
              , 116101
              , 92838
              , 108346
              , 100592
              , 123855]
        },
        {
            name: 'Domestic',
            type: 'line',
            smooth: true,
            data: [432484
              , 520415
              , 618393
              , 762744
              , 838852
              , 951097
              , 1056604
              , 1478630
              , 1162110
              , 1373123
              , 1267617
              , 1584136]
        },
        {
            name: 'Total',
            type: 'line',
            smooth: true,
            data: [472035
              , 567593
              , 669236
              , 824441
              , 909915
              , 1028426
              , 1141687
              , 1594730
              , 1254948
              , 1481470
              , 1368209
              , 1707991]
        }
    ]
};
}
treeOne() {
  this.trees = {
    title : {
        text: 'Mancanegara 123.855',
        x: 'center',
        textStyle: {
          fontSize: 18,
          fontWeight: 'normal',
          color: 'gray'
      },
    },
    color: ['#DFA100', '#318700', '#006690', 'darkbrown', '#E62700', '#660092', 'darkcyan', '#80746D', 'darkblue', '#25333D'],
    tooltip : {
        trigger: 'item',
        formatter: '{b}: {c}'
    },
    toolbox: {
      show : false,
      showTitle: false,
      feature : {
          mark : {show: false},
          dataView : {show: false, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true, title : 'Original'},
          saveAsImage : {show: true}
      }
  },
    calculable : false,
    series : [
        {
            name: 'Mancanegara',
            type: 'treemap',
            breadcrumb: {
              show: false
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b}'
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },
            data: [
                {
                    name: 'Belanda',
                    value: 17
                },
                {
                    name: 'Malaysia',
                    value: 13
                },
                {
                    name: 'Jepang',
                    value: 10
                },
                {
                    name: 'Amerika Serikat',
                    value: 9
                },
                {
                    name: 'Singapura',
                    value: 8
                },
                {
                    name: 'Perancis',
                    value: 7
                },
                {
                    name: 'Jerman',
                    value: 6
                },
                {
                    name: 'Australia',
                    value: 6
                },
                {
                    name: 'China',
                    value: 6
                },
                {
                    name: 'Lainnya',
                    value: 19
                }
            ]
        }
    ]
  };
}
treeTwo() {
  this.treess = {
    title : {
        text: 'Domestic 1.584.136',
        x: 'center',
        textStyle: {
          fontSize: 18,
          fontWeight: 'normal',
          color: 'gray'
      },
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b}: {c}'
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    color: ['#E62700', '#318700', '#006690', '#25333D', '#DFA100', '#660092', 'darkcyan', 'brown'],
    calculable : false,
    series : [
        {
            name: 'Domestic',
            type: 'treemap',
            breadcrumb: {
              show: false
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b}'
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: false
                    }
                },
            },
            data: [
                {
                    name: 'Jawa Timur',
                    value: 25
                },
                {
                    name: 'Jawa Tengah',
                    value: 20
                },
                {
                    name: 'Jawa Barat',
                    value: 18
                },
                {
                    name: 'DKI Jakarta',
                    value: 8
                },
                {
                    name: 'Kalimantan Timur	',
                    value: 4
                },
                {
                    name: 'Banten',
                    value: 4
                },
                {
                    name: 'Kalimantan Barat',
                    value: 3
                },
                {
                    name: 'Domestik',
                    value: 19
                }
            ]
        }
    ]
};
}
}
