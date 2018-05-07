import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  options: any;
  trees: any;
  treess: any;
  location: any = 0;
  tourist: any = 0;
  bulan: any = 0;
  month = [{
    all: [1919, 1184, 617, 403, 497, 465, 5085],
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
locs = [{

  0: [
    {
      0: [5085, 2569, 265, 246, 226, 248, 269, 238, 259, 287, 277, 254, 2516, 309, 349, 302, 309, 297, 306, 329, 315],
      1: [1919, 1070, 118, 106, 103, 93, 119, 110, 109, 116, 97, 99, 849, 119, 119, 98, 93, 106, 105, 112, 97],
      2: [1184, 689, 71, 61, 51, 75, 61, 53, 67, 90, 90, 70, 495, 66, 65, 68, 55, 64, 60, 67, 50],
      3: [617, 251, 24, 27, 30, 27, 27, 22, 27, 25, 30, 12, 366, 39, 60, 43, 54, 33, 49, 48, 40],
      4: [403, 142, 17, 15, 11, 14, 17, 15, 15, 14, 13, 11, 261, 29, 27, 22, 39, 32, 30, 39, 43],
      5: [497, 254, 20, 20, 21, 29, 28, 24, 25, 27, 30, 30, 243, 25, 33, 26, 26, 28, 34, 26, 45],
      6: [465, 163, 15, 17, 10, 10, 17, 14, 16, 15, 17, 32, 302, 31, 45, 45, 42, 34, 28, 37, 40]
    }
  ],
  1: [
    {
      0: [6102, 3083, 318, 295, 271, 298, 323, 286, 311, 344, 332, 305, 3019, 371, 419, 362, 371, 356, 367, 395, 378],
      1: [2303, 1284, 142, 127, 124, 112, 143, 132, 131, 139, 116, 119, 1019, 143, 143, 118, 112, 127, 126, 134, 116],
      2: [1421, 827, 85, 73, 61, 90, 73, 64, 80, 108, 108, 84, 594, 79, 78, 82, 66, 77, 72, 80, 60],
      3: [740, 301, 29, 32, 36, 32, 32, 26, 32, 30, 36, 14, 439, 47, 72, 52, 65, 40, 59, 58, 48],
      4: [484, 170, 20, 18, 13, 17, 20, 18, 18, 17, 16, 13, 313, 35, 32, 26, 47, 38, 36, 47, 52],
      5: [596, 305, 24, 24, 25, 35, 34, 29, 30, 32, 36, 36, 292, 30, 40, 31, 31, 34, 41, 31, 54],
      6: [558, 196, 18, 20, 12, 12, 20, 17, 19, 18, 20, 38, 362, 37, 54, 54, 50, 41, 34, 44, 48]
    }
  ],
  2: [
    {
      0: [6018, 3029, 291, 292, 268, 295, 320, 283, 308, 341, 329, 302, 2989, 367, 415, 359, 367, 353, 364, 391, 374],
      1: [2256, 1247, 796, 117, 126, 122, 110, 141, 131, 129, 138, 115, 118, 1009, 141, 141, 116, 110, 126, 125, 133, 115],
      2: [1407, 819, 84, 72, 61, 89, 72, 63, 80, 107, 107, 83, 588, 78, 77, 81, 65, 76, 71, 80, 59],
      3: [733, 298, 29, 32, 36, 32, 32, 26, 32, 30, 36, 14, 435, 46, 71, 51, 64, 39, 58, 57, 48],
      4: [479, 169, 20, 18, 13, 17, 20, 18, 18, 17, 15, 13, 310, 34, 32, 26, 46, 38, 36, 46, 51],
      5: [590, 302, 24, 24, 25, 34, 33, 29, 30, 32, 36, 36, 289, 30, 39, 31, 31, 33, 40, 31, 53],
      6: [552, 194, 18, 20, 12, 12, 20, 17, 19, 18, 20, 38, 359, 37, 53, 53, 50, 40, 33, 44, 48]
    }
  ],
  3: [
    {
      0: [5898, 2969, 287, 286, 263, 289, 313, 277, 302, 334, 322, 296, 2929, 360, 406, 352, 360, 346, 356, 383, 367],
      1: [2212, 1223, 116, 123, 120, 108, 139, 128, 127, 135, 113, 115, 988, 139, 139, 114, 108, 123, 122, 130, 113],
      2: [1378, 802, 83, 71, 59, 87, 71, 62, 78, 105, 105, 81, 576, 77, 76, 79, 64, 75, 70, 78, 58],
      3: [718, 292, 28, 31, 35, 31, 31, 26, 31, 29, 35, 14, 426, 45, 70, 50, 63, 38, 57, 56, 47],
      4: [469, 165, 20, 17, 13, 16, 20, 17, 17, 16, 15, 13, 304, 34, 31, 26, 45, 37, 35, 45, 50],
      5: [579, 296, 23, 23, 24, 34, 33, 28, 29, 31, 35, 35, 283, 29, 38, 30, 30, 33, 40, 30, 52],
      6: [541, 190, 17, 20, 12, 12, 20, 16, 19, 17, 20, 37, 352, 36, 52, 52, 49, 40, 33, 43, 47]
    }
  ],
  4: [
    {
      0: [5488, 2764, 269, 266, 245, 269, 291, 258, 280, 311, 300, 275, 2724, 335, 378, 327, 335, 322, 331, 356, 341],
      1: [2060, 1140, 110, 115, 112, 101, 129, 119, 118, 126, 105, 107, 919, 129, 129, 106, 101, 115, 114, 121, 105],
      2: [1282, 746, 77, 66, 55, 81, 66, 57, 73, 97, 97, 76, 536, 71, 70, 74, 60, 69, 65, 73, 54],
      3: [668, 272, 26, 29, 32, 29, 29, 24, 29, 27, 32, 13, 396, 42, 65, 47, 58, 36, 53, 52, 43],
      4: [436, 154, 18, 16, 12, 15, 18, 16, 16, 15, 14, 12, 283, 31, 29, 24, 42, 35, 32, 42, 47],
      5: [538, 275, 22, 22, 23, 31, 30, 26, 27, 29, 32, 32, 263, 27, 36, 28, 28, 30, 37, 28, 49],
      6: [503, 176, 16, 18, 11, 11, 18, 15, 17, 16, 18, 35, 327, 34, 49, 49, 45, 37, 30, 40, 43]
    }
  ],
  5: [
    {
      0: [5331, 2689, 269, 258, 237, 260, 283, 250, 272, 301, 291, 267, 2642, 325, 367, 317, 325, 312, 321, 346, 331],
      1: [2006, 1114, 114, 111, 108, 98, 125, 116, 114, 122, 102, 104, 892, 125, 125, 103, 98, 111, 110, 118, 102],
      2: [1244, 724, 75, 64, 54, 79, 64, 56, 70, 95, 95, 74, 520, 69, 68, 71, 58, 67, 63, 70, 53],
      3: [648, 264, 25, 28, 32, 28, 28, 23, 28, 26, 32, 13, 384, 41, 63, 45, 57, 35, 51, 50, 42],
      4: [423, 149, 18, 16, 12, 15, 18, 16, 16, 15, 14, 12, 274, 30, 28, 23, 41, 34, 32, 41, 45],
      5: [522, 267, 21, 21, 22, 30, 29, 25, 26, 28, 32, 32, 255, 26, 35, 27, 27, 29, 36, 27, 47],
      6: [488, 171, 16, 18, 11, 11, 18, 15, 17, 16, 18, 34, 317, 33, 47, 47, 44, 36, 29, 39, 42]
    }
  ],
  6: [
    {
      0: [6018, 3029, 291, 292, 268, 295, 320, 283, 308, 341, 329, 302, 2989, 367, 415, 359, 367, 353, 364, 391, 374],
      1: [2256, 1247, 796, 117, 126, 122, 110, 141, 131, 129, 138, 115, 118, 1009, 141, 141, 116, 110, 126, 125, 133, 115],
      2: [1407, 819, 84, 72, 61, 89, 72, 63, 80, 107, 107, 83, 588, 78, 77, 81, 65, 76, 71, 80, 59],
      3: [733, 298, 29, 32, 36, 32, 32, 26, 32, 30, 36, 14, 435, 46, 71, 51, 64, 39, 58, 57, 48],
      4: [479, 169, 20, 18, 13, 17, 20, 18, 18, 17, 15, 13, 310, 34, 32, 26, 46, 38, 36, 46, 51],
      5: [590, 302, 24, 24, 25, 34, 33, 29, 30, 32, 36, 36, 289, 30, 39, 31, 31, 33, 40, 31, 53],
      6: [552, 194, 18, 20, 12, 12, 20, 17, 19, 18, 20, 38, 359, 37, 53, 53, 50, 40, 33, 44, 48]
    }
  ],
  7: [
    {
      0: [5898, 2969, 287, 286, 263, 289, 313, 277, 302, 334, 322, 296, 2929, 360, 406, 352, 360, 346, 356, 383, 367],
      1: [2212, 1223, 116, 123, 120, 108, 139, 128, 127, 135, 113, 115, 988, 139, 139, 114, 108, 123, 122, 130, 113],
      2: [1378, 802, 83, 71, 59, 87, 71, 62, 78, 105, 105, 81, 576, 77, 76, 79, 64, 75, 70, 78, 58],
      3: [718, 292, 28, 31, 35, 31, 31, 26, 31, 29, 35, 14, 426, 45, 70, 50, 63, 38, 57, 56, 47],
      4: [469, 165, 20, 17, 13, 16, 20, 17, 17, 16, 15, 13, 304, 34, 31, 26, 45, 37, 35, 45, 50],
      5: [579, 296, 23, 23, 24, 34, 33, 28, 29, 31, 35, 35, 283, 29, 38, 30, 30, 33, 40, 30, 52],
      6: [541, 190, 17, 20, 12, 12, 20, 16, 19, 17, 20, 37, 352, 36, 52, 52, 49, 40, 33, 43, 47]
    }
  ],
  8: [
    {
      0: [5488, 2764, 269, 266, 245, 269, 291, 258, 280, 311, 300, 275, 2724, 335, 378, 327, 335, 322, 331, 356, 341],
      1: [2060, 1140, 110, 115, 112, 101, 129, 119, 118, 126, 105, 107, 919, 129, 129, 106, 101, 115, 114, 121, 105],
      2: [1282, 746, 77, 66, 55, 81, 66, 57, 73, 97, 97, 76, 536, 71, 70, 74, 60, 69, 65, 73, 54],
      3: [668, 272, 26, 29, 32, 29, 29, 24, 29, 27, 32, 13, 396, 42, 65, 47, 58, 36, 53, 52, 43],
      4: [436, 154, 18, 16, 12, 15, 18, 16, 16, 15, 14, 12, 283, 31, 29, 24, 42, 35, 32, 42, 47],
      5: [538, 275, 22, 22, 23, 31, 30, 26, 27, 29, 32, 32, 263, 27, 36, 28, 28, 30, 37, 28, 49],
      6: [503, 176, 16, 18, 11, 11, 18, 15, 17, 16, 18, 35, 327, 34, 49, 49, 45, 37, 30, 40, 43]
    }
  ],
  9: [
    {
      0: [5331, 2689, 269, 258, 237, 260, 283, 250, 272, 301, 291, 267, 2642, 325, 367, 317, 325, 312, 321, 346, 331],
      1: [2006, 1114, 114, 111, 108, 98, 125, 116, 114, 122, 102, 104, 892, 125, 125, 103, 98, 111, 110, 118, 102],
      2: [1244, 724, 75, 64, 54, 79, 64, 56, 70, 95, 95, 74, 520, 69, 68, 71, 58, 67, 63, 70, 53],
      3: [648, 264, 25, 28, 32, 28, 28, 23, 28, 26, 32, 13, 384, 41, 63, 45, 57, 35, 51, 50, 42],
      4: [423, 149, 18, 16, 12, 15, 18, 16, 16, 15, 14, 12, 274, 30, 28, 23, 41, 34, 32, 41, 45],
      5: [522, 267, 21, 21, 22, 30, 29, 25, 26, 28, 32, 32, 255, 26, 35, 27, 27, 29, 36, 27, 47],
      6: [488, 171, 16, 18, 11, 11, 18, 15, 17, 16, 18, 34, 317, 33, 47, 47, 44, 36, 29, 39, 42]
    }
  ],
}];
tour = [{

}];
data: any;
constructor(private routes: Router, private services: DataService) { }
  ngOnInit() {
    this.line();
    this.setLoc(this.location);
  }

  setTou(event) {
    this.tourist = event;
    this.setBul(this.bulan);
    this.setLoc(this.location);
  }
  setBul(event) {
    this.bulan = event;
    this.data = [];
    setTimeout(() => {
      this.setLoc(this.location);
    }, 100);
  }

  setLoc(event) {
    this.location = event;
    // console.log('tourist', this.tourist);
    // console.log('lok', this.location);
    // console.log('bulan', this.bulan);
    const json = this.locs[0];
    this.data =  json[this.bulan][0][this.location];
    // console.log('data', json[this.bulan][0][this.location]);
    this.treeOne();
    this.treeTwo();
  }
  getData() {
    // this.services.data2().subscribe(res => {
    //     console.log(res);
    // });
  }

  plan() {
      this.routes.navigateByUrl('plan');
  }

  goLoc() {
    this.routes.navigateByUrl('/location');
  }

  goSim() {
    this.routes.navigateByUrl('/score');
  }
  onChartClick(event) {
    // console.log(event.dataIndex);
    // console.log(event.seriesName);
    const cnt = event.name;
    const country = cnt.replace(' ', '');
    this.routes.navigateByUrl('/action?a=' + event.dataIndex + '&i=' + event.seriesName);
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
    // console.log('test');
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
                // {
                //     name: 'All Tourist (' + this.data[0] + ')',
                //     value: this.data[0]
                // },
                // {
                //     name: 'Mancanegara (' + this.data[1] + ')',
                //     value: this.data[1]
                // },
                {
                    name: 'Belanda (' + this.data[2] + ')',
                    value: this.data[2]
                },
                {
                    name: 'Malaysia (' + this.data[3] + ')',
                    value: this.data[3]
                },
                {
                    name: 'Jepang (' + this.data[4] + ')',
                    value: this.data[4]
                },
                {
                    name: 'Amerika Serikat (' + this.data[5] + ')',
                    value: this.data[5]
                },
                {
                    name: 'Singapura (' + this.data[6] + ')',
                    value: this.data[6]
                },
                {
                    name: 'Perancis (' + this.data[7] + ')',
                    value: this.data[7]
                },
                {
                    name: 'Jerman (' + this.data[8] + ')',
                    value: this.data[8]
                },
                {
                    name: 'Australia (' + this.data[9] + ')',
                    value: this.data[9]
                },
                {
                    name: 'China (' + this.data[10] + ')',
                    value: this.data[10]
                },
                {
                    name: 'Lainnya Mancanegara (' + this.data[11] + ')',
                    value: this.data[11]
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
                // {
                //     name: 'Domestik (' + this.data[12] + ')',
                //     value: this.data[12]
                // },
                {
                    name: 'Jawa Timur (' + this.data[13] + ')',
                    value: this.data[13]
                },
                {
                    name: 'Jawa Tengah (' + this.data[14] + ')',
                    value: this.data[14]
                },
                {
                    name: 'Jawa Barat (' + this.data[15] + ')',
                    value: this.data[15]
                },
                {
                    name: 'DKI Jakarta (' + this.data[16] + ')',
                    value: this.data[16]
                },
                {
                    name: 'Kalimantan Timur	(' + this.data[17] + ')',
                    value: this.data[17]
                },
                {
                    name: 'Banten (' + this.data[18] + ')',
                    value: this.data[18]
                },
                {
                    name: 'Kalimantan Barat (' + this.data[19] + ')',
                    value: this.data[19]
                },
                {
                    name: 'Lainnya Domestik (' + this.data[20] + ')',
                    value: this.data[20]
                }
            ]
        }
    ]
};
}

}
