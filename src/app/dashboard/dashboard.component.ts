import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  options: any;
  trees: any;
  treess: any;

  constructor(private routes: Router) { }

  ngOnInit() {
    this.line();
    this.treeOne();
    this.treeTwo();
  }

  goLoc() {
    this.routes.navigateByUrl('/location');
  }

  goSim() {
    this.routes.navigateByUrl('/score');
  }
  onChartClick(event) {
    console.log(event.name);
    const cnt = event.name;
    const country = cnt.replace(' ', '');
    this.routes.navigateByUrl('/action?a=' + country);
  }

  line() {
      this.options = {
        title : {
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
        color: ['#DFA100', '#318700', '#E62700'],
        legend: {
            bottom: 'bottom',
            data: ['Foreign', 'Domestic', 'Total'],
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
                data : ['2012', '2013', '2014', '2015', '2016', '2017', '2018(YTD)']
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
                name: 'Foreign',
                type: 'line',
                smooth: true,
                data: [197751, 235893, 254213, 308485, 355313, 386646, 141806]
            },
            {
                name: 'Domestic',
                type: 'line',
                smooth: true,
                data: [2162422, 2602074, 3091967, 3813720, 4194261, 4755486, 1761006]
            },
            {
                name: 'Total',
                type: 'line',
                smooth: true,
                data: [2360173, 2837967, 3346180, 4122205, 4549574, 5142132, 1902812]
            }
        ]
    };
  }
  treeOne() {
    this.trees = {
      title : {
          text: 'Mancanegara 141.806',
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
          text: 'Domestic 1.761.006',
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
                      name: 'Lainnya',
                      value: 19
                  }
              ]
          }
      ]
  };
  }

}
