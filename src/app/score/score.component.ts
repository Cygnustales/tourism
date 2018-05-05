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
  rate: any = 10000;
  hotel: any = 100;
  budget: any = 10000;
  expo: any = 20;
  increase: any = 150;
  hashtag: any = 30;
  geotag: any = 0;
  tgifData: any;
  touristData: any;
  opttourist: any;
  tgif = [6102
    , 6018
    , 5898
    , 5488
    , 5331
    , 5868
    , 7028
    , 9105];
  tourist = [4357
    , 4297
    , 4212
    , 3919
    , 3807
    , 4190
    , 5018
    , 6502];
  constructor() { }

  ngOnInit() {
    this.visitor();
    this.simulate();
  }

  simulate() {
    const mrate = (this.rate / 100 ) * 2;
    const mhotel = (this.hotel * -3);
    const mbudget = (this.budget * 4) / 100;
    const mexpo = this.expo * 11;
    const sum = (mrate + mhotel + mbudget + mexpo + this.increase + this.hashtag + this.geotag) / 20000;
    const sums = (1 + (mrate + mhotel + mbudget + mexpo + this.increase + this.hashtag + this.geotag) / 20000).toFixed(2);
    const temp_tgif = [6102, 6018, 5898, 5488];
    const temp_tourist = [4357, 4297, 4212, 3919];
    const temp_tourist2 = [4357, 4297, 4212, 3919];
    console.log('rate', mrate);
    console.log('hotel', mhotel);
    console.log('budget', mbudget);
    console.log('expo', mexpo);
    console.log('sum', sum);
    for (let i = 0; i < this.tgif.length; i++) {
      const e = this.tgif[i];
      if ( i === 4 || i === 6) {
        const f = 1.3 + sum;
        const g = Number(Math.round(e * f).toFixed(0));
        temp_tgif.push(g);
      }
      if ( i === 5 ) {
        const f = 1.5 + sum;
        const g = Number(Math.round(e * f).toFixed(0));
        temp_tgif.push(g);
      }
      if ( i === 7 ) {
        const f = 1.6 + sum;
        const g = Number(Math.round(e * f).toFixed(0));
        temp_tgif.push(g);
      }
    }
    for (let i = 0; i < this.tourist.length; i++) {
      const e = this.tourist[i];
      if ( i === 4) {
        const h = Number(((this.tgif[4] * 71) / 100).toFixed(0));
        const f = 1.3 + sum;
        const g = Number(Math.round(h * f).toFixed(0));
        temp_tourist2.push(g);
        temp_tourist.push(h);
      }
      if ( i === 5) {
        const h = Number(((this.tgif[5] * 71) / 100).toFixed(0));
        const f = 1.5 + sum;
        const g = Number(Math.round(h * f).toFixed(0));
        temp_tourist2.push(g);
        temp_tourist.push(h);
      }
      if ( i === 6) {
        const h = Number(((this.tgif[6] * 71) / 100).toFixed(0));
        const f = 1.3 + sum;
        const g = Number(Math.round(h * f).toFixed(0));
        temp_tourist2.push(g);
        temp_tourist.push(h);
      }
      if ( i === 7) {
        const h = Number(((this.tgif[7] * 71) / 100).toFixed(0));
        const f = 1.6 + sum;
        const g = Number(Math.round(h * f).toFixed(0));
        temp_tourist2.push(g);
        temp_tourist.push(h);
      }
    }
    console.log(temp_tourist);
    this.tgifData = temp_tgif;
    this.touristData = temp_tourist;
    this.opttourist = temp_tourist2;
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
      color: ['gray', 'green', 'blue', 'red'],
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
                show: false,
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
              show: false,
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
            data :  ['', '', '', '', '', 'Prediction', 'Prediction', 'Prediction', 'Prediction']
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
              data: this.touristData
          },
          {
              name: 'Optimized Visit (in million)',
              type: 'line',
              lineStyle: {
                type: 'dashed'
              },
              smooth: true,
              data: this.opttourist
          },
          {
              name: 'TGIF',
              type: 'line',
              smooth: true,
              data: this.tgifData
          },
          {
              name: 'Optimized TGIF',
              type: 'line',
              lineStyle: {
                type: 'dashed'
              },
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
