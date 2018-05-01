import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  country: any;

  visited = [{
    Belanda : [34, 25, 13, 12, 9, 7],
    Malaysia : [35, 27, 16, 15, 3, 4],
    Jepang : [28, 36, 18, 12, 3, 4],
    AmerikaSerikat: [39, 29, 15, 10, 5, 2],
    Singapura: [38, 27, 16, 12, 4, 3],
    Perancis: [27, 31, 18, 17, 2, 5],
    Jerman: [36, 31, 12, 14, 2, 5],
    Australia: [37, 23, 13, 16, 5, 6],
    Cina : [40, 25, 13, 18, 2, 3],
    Lainnya: [37, 15, 19, 17, 4, 8],
    JawaTimur : [34, 25, 13, 12, 9, 7],
    JawaTengah : [35, 27, 16, 15, 3, 4],
    JawaBarat : [28, 36, 18, 12, 3, 4],
    DKIJakarta: [39, 29, 15, 10, 5, 2],
    KalimantanTimur: [38, 27, 16, 12, 4, 3],
    Banten: [27, 31, 18, 17, 2, 5],
    KalimantanBarat: [36, 31, 12, 14, 2, 5],
    Domestik: [37, 23, 13, 16, 5, 6],
  }];

  month = [{
    Belanda : [8, 8, 12, 8, 8, 8, 10, 7, 8, 9, 6, 8],
    Malaysia : [12, 5, 7, 12, 11, 12, 7, 5, 7, 8, 9, 4],
    Jepang : [11, 8, 9, 9, 4, 12, 10, 5, 6, 11, 6, 11],
    AmerikaSerikat: [5, 5, 10, 8, 7, 9, 10, 7, 12, 3, 12, 11],
    Singapura: [4, 5, 11, 9, 8, 10, 4, 5, 8, 13, 12, 11],
    Perancis: [5, 5, 15, 15, 8, 10, 12, 4, 6, 6, 8, 7],
    Jerman: [13, 7, 4, 7, 7, 7, 5, 11, 12, 11, 7, 7],
    Australia: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    Cina : [9, 11, 7, 11, 7, 6, 7, 12, 11, 8, 7, 6],
    Lainnya: [8, 7, 8, 6, 4, 10, 11, 9, 5, 13, 5, 13],
    JawaTimur : [6, 8, 11, 8, 11, 8, 8, 3, 6, 7, 10, 12],
    JawaTengah : [7, 13, 3, 11, 12, 8, 12, 4, 6, 12, 6, 6],
    JawaBarat : [9, 5, 10, 11, 5, 11, 10, 9, 9, 8, 5, 8],
    DKIJakarta: [5, 4, 9, 8, 8, 4, 11, 6, 11, 10, 11, 12],
    KalimantanTimur: [5, 8, 11, 10, 8, 10, 12, 5, 3, 8, 11, 9],
    Banten: [9, 7, 14, 14, 5, 11, 6, 12, 6, 4, 4, 6],
    KalimantanBarat: [5, 11, 9, 5, 9, 11, 9, 4, 8, 15, 11, 5],
    Domestik: [9, 7, 4, 10, 6, 9, 11, 6, 5, 13, 13, 5],
  }];

  opt = [{
    Belanda : [8, 8, 12, 8, 8, 8, 14, 11, 12, 13, 10, 12],
    Malaysia : [12, 5, 7, 12, 11, 16, 11, 9, 12, 12, 13, 8],
    Jepang : [11, 8, 9, 9, 4, 12, 14, 9, 10, 15, 10, 15],
    AmerikaSerikat: [5, 5, 10, 8, 7, 9, 10, 7, 12, 3, 12, 11],
    Singapura: [4, 5, 11, 9, 8, 10, 4, 5, 8, 13, 12, 11],
    Perancis: [5, 5, 15, 15, 8, 10, 12, 4, 6, 6, 8, 7],
    Jerman: [13, 7, 4, 7, 7, 7, 5, 11, 12, 11, 7, 7],
    Australia: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    Cina : [9, 11, 7, 11, 7, 6, 7, 12, 11, 8, 7, 6],
    Lainnya: [8, 7, 8, 6, 4, 10, 11, 9, 5, 13, 5, 13],
    JawaTimur : [6, 8, 11, 8, 11, 8, 12, 7, 10, 11, 14, 16],
    JawaTengah : [7, 13, 3, 11, 12, 8, 16, 8, 10, 16, 10, 10],
    JawaBarat : [9, 5, 10, 11, 5, 11, 14, 13, 13, 12, 9, 12],
    DKIJakarta: [5, 4, 9, 8, 8, 4, 11, 6, 11, 10, 11, 12],
    KalimantanTimur: [5, 8, 11, 10, 8, 10, 12, 5, 3, 8, 11, 9],
    Banten: [9, 7, 14, 14, 5, 11, 6, 12, 6, 4, 4, 6],
    KalimantanBarat: [5, 11, 9, 5, 9, 11, 9, 4, 8, 15, 11, 5],
    Domestik: [9, 7, 4, 10, 6, 9, 11, 6, 5, 13, 13, 5],
  }];

  travel = [{
    Belanda : [53, 17, 31],
    Malaysia : [23, 26, 51],
    Jepang : [50, 23, 27],
    AmerikaSerikat: [38, 11, 51],
    Singapura: [38, 27, 16, 12, 4, 3],
    Perancis: [27, 31, 18, 17, 2, 5],
    Jerman: [36, 31, 12, 14, 2, 5],
    Australia: [37, 23, 13, 16, 5, 6],
    Cina : [40, 25, 13, 18, 2, 3],
    Lainnya: [37, 15, 19, 17, 4, 8],
    JawaTimur : [45, 26, 29],
    JawaTengah : [57, 13, 30],
    JawaBarat : [32, 26, 42],
    DKIJakarta: [39, 29, 15, 10, 5, 2],
    KalimantanTimur: [38, 27, 16, 12, 4, 3],
    Banten: [27, 31, 18, 17, 2, 5],
    KalimantanBarat: [36, 31, 12, 14, 2, 5],
    Domestik: [37, 23, 13, 16, 5, 6],
  }];

  tipe = [{
    Belanda : [53, 47, 31],
    Malaysia : [53, 47, 51],
    Jepang : [46, 54, 27],
    AmerikaSerikat: [38, 11, 51],
    Singapura: [38, 27, 16, 12, 4, 3],
    Perancis: [27, 31, 18, 17, 2, 5],
    Jerman: [36, 31, 12, 14, 2, 5],
    Australia: [37, 23, 13, 16, 5, 6],
    Cina : [40, 25, 13, 18, 2, 3],
    Lainnya: [37, 15, 19, 17, 4, 8],
    JawaTimur : [21, 79, 29],
    JawaTengah : [24, 76, 30],
    JawaBarat : [29, 71, 42],
    DKIJakarta: [39, 29, 15, 10, 5, 2],
    KalimantanTimur: [38, 27, 16, 12, 4, 3],
    Banten: [27, 31, 18, 17, 2, 5],
    KalimantanBarat: [36, 31, 12, 14, 2, 5],
    Domestik: [37, 23, 13, 16, 5, 6],
  }];

  popular = [{
    Belanda : [90, 4, 31],
    Malaysia : [60, 3, 51],
    Jepang : [87, 4, 27],
    AmerikaSerikat: [38, 11, 51],
    Singapura: [38, 27, 16, 12, 4, 3],
    Perancis: [27, 31, 18, 17, 2, 5],
    Jerman: [36, 31, 12, 14, 2, 5],
    Australia: [37, 23, 13, 16, 5, 6],
    Cina : [40, 25, 13, 18, 2, 3],
    Lainnya: [37, 15, 19, 17, 4, 8],
    JawaTimur : [80, 3, 29],
    JawaTengah : [80, 3, 30],
    JawaBarat : [71, 3, 42],
    DKIJakarta: [39, 29, 15, 10, 5, 2],
    KalimantanTimur: [38, 27, 16, 12, 4, 3],
    Banten: [27, 31, 18, 17, 2, 5],
    KalimantanBarat: [36, 31, 12, 14, 2, 5],
    Domestik: [37, 23, 13, 16, 5, 6],
  }];

  visit: any;
  visitData: any;
  visitDataOpt: any;
  locations: any;
  pies: any;
  pies2: any;
  pieData: any;
  pieData2: any;
  pops: any;
  constructor(private routing: ActivatedRoute) { }

  ngOnInit() {
    this.country =  this.routing.snapshot.queryParamMap.get('a');
    this.visitData = this.month[0][this.country];
    this.visitDataOpt = this.opt[0][this.country];
    this.locations = this.visited[0][this.country];
    this.pieData =  this.travel[0][this.country];
    this.pieData2 =  this.tipe[0][this.country];
    this.pops = this.popular[0][this.country];
    this.visitor();
    this.pie();
    this.pie2();
    console.log(this.locations);
  }

  visitor() {
    this.visit = {
      title : {
          show: false,
          text: 'Travel Companion',
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
          data: ['visit %', 'Optimized visit %'],
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
              name: 'Visit %',
              type: 'line',
              smooth: true,
              data: this.visitData
          },
          {
              name: 'Optimized Visit %',
              type: 'line',
              smooth: true,
              data: this.visitDataOpt,
              lineStyle: {
                type: 'dashed'
              },
          }
      ]
  };
  }
  pie() {
    this.pies = {
      title : {
        show: true,
        x: 'center',
        text: 'Travel Companion',
        textStyle: {
          fontSize: 18,
          fontWeight: 'normal',
          color: 'gray'
      },
    },
      tooltip : {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
          orient : 'horizontal',
          x : 'center',
          y: 'bottom',
          data: ['Solo', 'Family', 'Couple']
      },
      toolbox: {
          show : false,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                  show: true,
                  type: ['pie', 'funnel'],
                  option: {
                      funnel: {
                          x: '25%',
                          width: '50%',
                          funnelAlign: 'center',
                          max: 1548
                      }
                  }
              },
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      series : [
          {
              name: 'Travel Companion',
              type: 'pie',
              radius : ['30%', '70%'],
              itemStyle : {
                  normal : {
                      label : {
                          show : false
                      },
                      labelLine : {
                          show : false
                      }
                  },
                  emphasis : {
                      label : {
                          show : false,
                          position : 'center',
                          textStyle : {
                              fontSize : '30',
                              fontWeight : 'bold'
                          }
                      }
                  }
              },
              data: [
                  {value: this.pieData[0], name: 'Solo'},
                  {value: this.pieData[1], name: 'Family'},
                  {value: this.pieData[2], name: 'Couple'},
              ]
          }
      ]
  };
  }

  pie2() {
    this.pies2 = {
      title : {
        show: true,
        x: 'center',
        text: 'Visit Type',
        textStyle: {
          fontSize: 18,
          fontWeight: 'normal',
          color: 'gray'
      },
    },
      tooltip : {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
          orient : 'horizontal',
          x : 'center',
          y: 'bottom',
          data: ['First Visit', 'Recurring']
      },
      toolbox: {
          show : false,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                  show: true,
                  type: ['pie', 'funnel'],
                  option: {
                      funnel: {
                          x: '25%',
                          width: '50%',
                          funnelAlign: 'center',
                          max: 1548
                      }
                  }
              },
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      series : [
          {
              name: 'Travel Companion',
              type: 'pie',
              radius : ['30%', '70%'],
              itemStyle : {
                  normal : {
                      label : {
                          show : false
                      },
                      labelLine : {
                          show : false
                      }
                  },
                  emphasis : {
                      label : {
                          show : false,
                          position : 'center',
                          textStyle : {
                              fontSize : '30',
                              fontWeight : 'bold'
                          }
                      }
                  }
              },
              data: [
                  {value: this.pieData2[0], name: 'First Visit'},
                  {value: this.pieData2[1], name: 'Recurring'},
              ]
          }
      ]
  };
  }
}
