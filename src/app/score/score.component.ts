import { Component, OnInit } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  visit: any;
  someRange: [ 3, 7 ];
  someKeyboardConfig: any = {
    behaviour: 'drag',
    connect: true,
    start: [0, 5],
    keyboard: false,  // same as [keyboard]="true"
    step: 0.1,
    pageSteps: 10,  // number of page steps, defaults to 10
    range: {
      min: 0,
      max: 5
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 6,
      stepped: true
    }
  };
  constructor() { }

  ngOnInit() {
    this.visitor();
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
      color: ['gray', 'yellow', 'blue', 'red'],
      legend: {
          bottom: 'bottom',
          data: ['Tourist Visit (in million)', 'Optimized Visit (in million)', 'TGIF', 'Optimized TGIF'],
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
                 color: ['rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)',
                 '#f1f1f1', '#f1f1f1', '#f1f1f1', '#f1f1f1']
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
              data :  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
          },
          {
            type : 'category',
            splitArea: {
              show: true,
              areaStyle: {
               color: ['rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)', 'rgba(255,0,0,0.0)',
               '#f1f1f1', '#f1f1f1', '#f1f1f1', '#f1f1f1']
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
              name: 'Tourist Visit (in million)',
              type: 'line',
              smooth: true,
              data: [4357
                , 4297
                , 4212
                , 3919
                , 3807
                , 4190
                , 5018
                , 6502]
          },
          {
              name: 'Optimized Visit (in million)',
              type: 'line',
              smooth: true,
              data: [4357
                , 4297
                , 4212
                , 3919
                , 4939
                , 6275
                , 6511
                , 10387]
          },
          {
              name: 'TGIF',
              type: 'line',
              smooth: true,
              data: [6102
                , 6018
                , 5898
                , 5488
                , 5331
                , 5868
                , 7028
                , 9105]
          },
          {
              name: 'Optimized TGIF',
              type: 'line',
              smooth: true,
              data: [6102
                , 6018
                , 5898
                , 5488
                , 6917
                , 8787
                , 9118
                , 14545]
          }
      ]
  };
  }
}
