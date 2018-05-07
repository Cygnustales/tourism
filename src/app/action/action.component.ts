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
    0: [37, 23, 13, 16, 5, 6, 15, 14, 4, 2],
    1 : [40, 25, 13, 18, 2, 3, 17, 11, 4, 2],
    2 : [34, 25, 13, 12, 9, 7, 12, 11, 10, 4],
    3 : [35, 27, 16, 15, 3, 4, 15, 14, 4, 2],
    4 : [28, 36, 18, 12, 3, 4, 17, 11, 4, 2],
    5: [39, 29, 15, 10, 5, 2, 12, 11, 10, 4],
    6: [38, 27, 16, 12, 4, 3, 15, 14, 4, 2],
    7: [27, 31, 18, 17, 2, 5, 17, 11, 4, 2],
    8: [36, 31, 12, 14, 2, 5, 12, 11, 10, 4],
    9: [37, 23, 13, 16, 5, 6, 15, 14, 4, 2],
    10 : [40, 25, 13, 18, 2, 3, 17, 11, 4, 2],
    11: [37, 15, 19, 17, 4, 8, 12, 11, 10, 4],
    12 : [40, 25, 13, 18, 2, 3, 17, 11, 4, 2],
    13 : [34, 25, 13, 12, 9, 7, 15, 14, 4, 2],
    14 : [35, 27, 16, 15, 3, 4, 17, 11, 4, 2],
    15 : [28, 36, 18, 12, 3, 4, 12, 11, 10, 4],
    16: [39, 29, 15, 10, 5, 2, 17, 11, 4, 2],
    17: [38, 27, 16, 12, 4, 3, 15, 14, 4, 2],
    18: [27, 31, 18, 17, 2, 5, 12, 11, 10, 4],
    19: [36, 31, 12, 14, 2, 5, 17, 11, 4, 2],
    20: [37, 23, 13, 16, 5, 6, 15, 14, 4, 2],
  }];

  month = [{
    0: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    1: [5, 5, 15, 15, 8, 10, 12, 4, 6, 6, 8, 7],
    2 : [8, 8, 12, 8, 8, 8, 10, 7, 8, 9, 6, 8],
    3 : [12, 5, 7, 12, 11, 12, 7, 5, 7, 8, 9, 4],
    4 : [11, 8, 9, 9, 4, 12, 10, 5, 6, 11, 6, 11],
    5: [5, 5, 10, 8, 7, 9, 10, 7, 12, 3, 12, 11],
    6: [4, 5, 11, 9, 8, 10, 4, 5, 8, 13, 12, 11],
    7: [5, 5, 15, 15, 8, 10, 12, 4, 6, 6, 8, 7],
    8: [13, 7, 4, 7, 7, 7, 5, 11, 12, 11, 7, 7],
    9: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    10 : [9, 11, 7, 11, 7, 6, 7, 12, 11, 8, 7, 6],
    11: [8, 7, 8, 6, 4, 10, 11, 9, 5, 13, 5, 13],
    12: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    13 : [6, 8, 11, 8, 11, 8, 8, 3, 6, 7, 10, 12],
    14 : [7, 13, 3, 11, 12, 8, 12, 4, 6, 12, 6, 6],
    15 : [9, 5, 10, 11, 5, 11, 10, 9, 9, 8, 5, 8],
    16: [5, 4, 9, 8, 8, 4, 11, 6, 11, 10, 11, 12],
    17: [5, 8, 11, 10, 8, 10, 12, 5, 3, 8, 11, 9],
    18: [9, 7, 14, 14, 5, 11, 6, 12, 6, 4, 4, 6],
    19: [5, 11, 9, 5, 9, 11, 9, 4, 8, 15, 11, 5],
    20: [9, 7, 4, 10, 6, 9, 11, 6, 5, 13, 13, 5],
  }];

  opt = [{
    0: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    1: [4, 5, 11, 9, 8, 10, 4, 5, 8, 13, 12, 11],
    2 : [8, 8, 12, 8, 8, 8, 14, 11, 12, 13, 10, 12],
    3 : [12, 5, 7, 12, 11, 16, 11, 9, 12, 12, 13, 8],
    4 : [11, 8, 9, 9, 4, 12, 14, 9, 10, 15, 10, 15],
    5: [5, 5, 10, 8, 7, 9, 10, 7, 12, 3, 12, 11],
    6: [4, 5, 11, 9, 8, 10, 4, 5, 8, 13, 12, 11],
    7: [5, 5, 15, 15, 8, 10, 12, 4, 6, 6, 8, 7],
    8: [13, 7, 4, 7, 7, 7, 5, 11, 12, 11, 7, 7],
    9: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    10 : [9, 11, 7, 11, 7, 6, 7, 12, 11, 8, 7, 6],
    11: [8, 7, 8, 6, 4, 10, 11, 9, 5, 13, 5, 13],
    12: [13, 7, 6, 12, 6, 13, 5, 8, 5, 6, 13, 5],
    13 : [6, 8, 11, 8, 11, 8, 12, 7, 10, 11, 14, 16],
    14 : [7, 13, 3, 11, 12, 8, 16, 8, 10, 16, 10, 10],
    15 : [9, 5, 10, 11, 5, 11, 14, 13, 13, 12, 9, 12],
    16: [5, 4, 9, 8, 8, 4, 11, 6, 11, 10, 11, 12],
    17: [5, 8, 11, 10, 8, 10, 12, 5, 3, 8, 11, 9],
    18: [9, 7, 14, 14, 5, 11, 6, 12, 6, 4, 4, 6],
    19: [5, 11, 9, 5, 9, 11, 9, 4, 8, 15, 11, 5],
    20: [9, 7, 4, 10, 6, 9, 11, 6, 5, 13, 13, 5],
  }];

  travel = [{
    0 : [57, 13, 30],
    1 : [45, 26, 29],
    2 : [53, 17, 31],
    3 : [23, 26, 51],
    4 : [50, 23, 27],
    5: [38, 11, 51],
    6: [38, 27, 16, 12, 4, 3],
    7: [27, 31, 18, 17, 2, 5],
    8: [36, 31, 12, 14, 2, 5],
    9: [37, 23, 13, 16, 5, 6],
    10 : [40, 25, 13, 18, 2, 3],
    11: [37, 15, 19, 17, 4, 8],
    12: [38, 27, 16, 12, 4, 3],
    13 : [45, 26, 29],
    14 : [57, 13, 30],
    15 : [32, 26, 42],
    16: [39, 29, 15, 10, 5, 2],
    17: [38, 27, 16, 12, 4, 3],
    18: [27, 31, 18, 17, 2, 5],
    19: [36, 31, 12, 14, 2, 5],
    20: [37, 23, 13, 16, 5, 6],
  }];

  tipe = [{
    0 : [29, 71, 42],
    1 : [29, 71, 42],
    2 : [53, 47, 31],
    3 : [53, 47, 51],
    4 : [46, 54, 27],
    5: [38, 11, 51],
    6: [38, 27, 16, 12, 4, 3],
    7: [27, 31, 18, 17, 2, 5],
    8: [36, 31, 12, 14, 2, 5],
    9: [37, 23, 13, 16, 5, 6],
    10 : [40, 25, 13, 18, 2, 3],
    11: [37, 15, 19, 17, 4, 8],
    12 : [29, 71, 42],
    13 : [21, 79, 29],
    14 : [24, 76, 30],
    15 : [29, 71, 42],
    16: [39, 29, 15, 10, 5, 2],
    17: [38, 27, 16, 12, 4, 3],
    18: [27, 31, 18, 17, 2, 5],
    19: [36, 31, 12, 14, 2, 5],
    20: [37, 23, 13, 16, 5, 6],
  }];

  popular = [{
    0: [90, 3, 41, 7.8, 442, 7.8, 567 ],
    1: [90, 3, 41, 7.8, 442, 7.8, 567 ],
    2 : [90, 4, 31, 6.8, 342, 7.2, 667 ],
    3 : [60, 3, 51, 7.8, 442, 7.8, 567 ],
    4 : [87, 4, 27, 6.8, 342, 7.2, 667 ],
    5: [98, 3, 51, 7.8, 442, 7.8, 567 ],
    6: [128, 4, 16, 7.8, 442, 7.8, 567 ],
    7: [78, 3, 18, 7.8, 442, 7.8, 567 ],
    8: [90, 3, 41, 7.8, 442, 7.8, 567 ],
    9: [107, 4, 13, 7.8, 442, 7.8, 567 ],
    10 : [120, 4, 13, 7.8, 442, 7.8, 567 ],
    11: [80, 3, 19, 7.8, 442, 7.8, 567 ],
    12: [90, 3, 41, 7.8, 442, 7.8, 567 ],
    13 : [80, 3, 29, 7.8, 442, 7.8, 567 ],
    14 : [80, 3, 30, 7.8, 442, 7.8, 567 ],
    15 : [71, 3, 42, 7.8, 442, 7.8, 567 ],
    16: [129, 4, 15, 7.8, 442, 7.8, 567 ],
    17: [138, 4, 16, 7.8, 442, 7.8, 567 ],
    18: [127, 4, 18, 7.8, 442, 7.8, 567 ],
    19: [76, 3, 12, 7.8, 442, 7.8, 567 ],
    20: [97, 3, 13, 7.8, 442, 7.8, 567 ],
  }];

  pack = [{
    0: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental', 50, 'Average', 6.4, 266],
    1: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental', 50, 'Average', 6.4, 266],
    2 : ['Car Rental', 50, 'Average', 6.4, 266, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Batik Shopping', 30, 'Good', 7, 309],
    3 : ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental', 50, 'Average', 6.4, 266],
    4 : ['Batik Shopping', 30, 'Good', 7, 309, 'Car Rental', 50, 'Average', 6.4, 266, 'Candi Exploration', 170, 'Good', 7.8, 185],
    5: ['Batik Shopping', 30, 'Good', 7, 309, 'Car Rental', 50, 'Average', 6.4, 266,
    'Candi Exploration', 170, 'Good', 7.8, 185],
    6: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209,
    'Car Rental', 50, 'Average', 6.4, 266],
    7: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental', 50, 'Average', 6.4, 266],
    8: ['Car Rental', 50, 'Average', 6.4, 266, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Batik Shopping', 30, 'Good', 7, 309],
    9: ['Batik Shopping', 30, 'Good', 7, 309, 'Car Rental', 50, 'Average', 6.4, 266, 'Candi Exploration', 170, 'Good', 7.8, 185],
    10 : ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental', 50, 'Average', 6.4, 266],
    11: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209,
    'Car Rental', 50, 'Average', 6.4, 266],
    12: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental', 50, 'Average', 6.4, 266],
    13 : ['Batik Shopping', 30, 'Good', 7, 309, 'Car Rental', 50, 'Average', 6.4, 266, 'Candi Exploration', 170, 'Good', 7.8, 185],
    14 : ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental',
    50, 'Average', 6.4, 266],
    15 : ['Car Rental', 50, 'Average', 6.4, 266, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Batik Shopping', 30, 'Good', 7, 309],
    16: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209,
    'Car Rental', 50, 'Average', 6.4, 266],
    17: ['Batik Shopping', 30, 'Good', 7, 309, 'Car Rental', 50, 'Average', 6.4, 266, 'Candi Exploration',
    170, 'Good', 7.8, 185],
    18: ['Candi Exploration', 170, 'Good', 7.8, 185, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Car Rental', 50, 'Average', 6.4, 266],
    19: ['Car Rental', 50, 'Average', 6.4, 266, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Batik Shopping', 30, 'Good', 7, 309],
    20: ['Batik Shopping', 30, 'Good', 7, 309, 'Car Rental', 50, 'Average', 6.4, 266, 'Candi Exploration', 170, 'Good', 7.8, 185],
  }];

  packs = [{
    0: ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    1: ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20, 'Average', 5.7, 213],
    2 : ['Bong Kopitown', 20, 'Average', 5.7, 213, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Cubic Bar', 25, 'Good', 7, 167],
    3 : ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20, 'Average', 5.7, 213],
    4 : ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    5: ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20,
    'Average', 5.7, 213],
    6: ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    7: ['Bong Kopitown', 20, 'Average', 5.7, 213, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Cubic Bar', 25, 'Good', 7, 167],
    8: ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    9: ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20, 'Average', 5.7, 213],
    10 : ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    11: ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20, 'Average', 5.7, 213],
    12: ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20, 'Average', 5.7, 213],
    13 : ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    14 : ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20,
    'Average', 5.7, 213],
    15 : ['Car Rental', 50, 'Average', 6.4, 266, 'Motorcyle Rental', 5, 'Good', 7.8, 209, 'Batik Shopping', 30, 'Good', 7, 309],
    16: ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    17: ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20,
    'Average', 5.7, 213],
    18: ['Bong Kopitown', 20, 'Average', 5.7, 213, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Cubic Bar', 25, 'Good', 7, 167],
    19: ['Cubic Bar', 25, 'Good', 7, 167, 'Bong Kopitown', 20, 'Average', 5.7, 213, 'House of Raminten', 20, 'Good', 7.4, 424],
    20: ['House of Raminten', 20, 'Good', 7.4, 424, 'Mande Kuliner', 15, 'Good', 7.2, 128, 'Bong Kopitown', 20, 'Average', 5.7, 213],
  }];

  fav = [{
    0 : ['Malioboro', 112, 149, 'Bargaining Tips',
    'Borobudur', 32, 44, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 55, 74, 'Comperhensive History',
    '#N/A', '#N/A', '#N/A', '#N/A',
    'Alun-alun Kidul', 23, 30, 'Night bazaar, light festival',
    'Club & Bar', 24, 32, 'Late night Beer Promo'],
    1 : ['Malioboro', 112, 149, 'Bargaining Tips',
    'Borobudur', 32, 44, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 55, 74, 'Comperhensive History',
    '#N/A', '#N/A', '#N/A', '#N/A',
    'Alun-alun Kidul', 23, 30, 'Night bazaar, light festival',
    'Club & Bar', 24, 32, 'Late night Beer Promo'],
    2 : ['Keraton', 77, 103, 'Comperhensive History', 'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide', 'Malioboro', 110, 147, 'Bargaining Tips',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival', 'Club & Bar', 27, 36, 'Late night Beer Promo'],
    3 : ['Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 66, 89, 'Comperhensive History',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival',
    'Raminten', 27, 36, 'Cabaret Show',
    'Club & Bar', 25, 34, 'Late night Beer Promo'],
    4 : ['Malioboro', 112, 149, 'Bargaining Tips',
    'Borobudur', 32, 44, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 55, 74, 'Comperhensive History',
    '#N/A', '#N/A', '#N/A', '#N/A',
    'Alun-alun Kidul', 23, 30, 'Night bazaar, light festival',
    'Club & Bar', 24, 32, 'Late night Beer Promo'],
    5: ['Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 66, 89, 'Comperhensive History',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival',
    'Raminten', 27, 36, 'Cabaret Show',
    'Club & Bar', 25, 34, 'Late night Beer Promo'],
    6: ['Malioboro', 112, 149, 'Bargaining Tips',
    'Borobudur', 32, 44, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 55, 74, 'Comperhensive History',
    '#N/A', '#N/A', '#N/A', '#N/A',
    'Alun-alun Kidul', 23, 30, 'Night bazaar, light festival',
    'Club & Bar', 24, 32, 'Late night Beer Promo'],
    7: ['Keraton', 77, 103, 'Comperhensive History', 'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide', 'Malioboro', 110, 147, 'Bargaining Tips',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival', 'Club & Bar', 27, 36, 'Late night Beer Promo'],
    8: ['Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 66, 89, 'Comperhensive History',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival',
    'Raminten', 27, 36, 'Cabaret Show',
    'Club & Bar', 25, 34, 'Late night Beer Promo'],
    9: ['Keraton', 77, 103, 'Comperhensive History', 'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide', 'Malioboro', 110, 147, 'Bargaining Tips',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival', 'Club & Bar', 27, 36, 'Late night Beer Promo'],
    10 : ['Malioboro', 112, 149, 'Bargaining Tips',
    'Borobudur', 32, 44, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 55, 74, 'Comperhensive History',
    '#N/A', '#N/A', '#N/A', '#N/A',
    'Alun-alun Kidul', 23, 30, 'Night bazaar, light festival',
    'Club & Bar', 24, 32, 'Late night Beer Promo'],
    11: ['Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 66, 89, 'Comperhensive History',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival',
    'Raminten', 27, 36, 'Cabaret Show',
    'Club & Bar', 25, 34, 'Late night Beer Promo'],
    12 : ['Malioboro', 112, 149, 'Bargaining Tips',
    'Borobudur', 32, 44, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 55, 74, 'Comperhensive History',
    '#N/A', '#N/A', '#N/A', '#N/A',
    'Alun-alun Kidul', 23, 30, 'Night bazaar, light festival',
    'Club & Bar', 24, 32, 'Late night Beer Promo'],
    13 : ['Keraton', 77, 103, 'Comperhensive History', 'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide', 'Malioboro', 110, 147, 'Bargaining Tips',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival', 'Club & Bar', 27, 36, 'Late night Beer Promo'],
    14 : [57, 13, 30],
    15 : ['Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 66, 89, 'Comperhensive History',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival',
    'Raminten', 27, 36, 'Cabaret Show',
    'Club & Bar', 25, 34, 'Late night Beer Promo'],
    16: ['Keraton', 77, 103, 'Comperhensive History', 'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide', 'Malioboro', 110, 147, 'Bargaining Tips',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival', 'Club & Bar', 27, 36, 'Late night Beer Promo'],
    17: ['Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 66, 89, 'Comperhensive History',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival',
    'Raminten', 27, 36, 'Cabaret Show',
    'Club & Bar', 25, 34, 'Late night Beer Promo'],
    18: ['Malioboro', 112, 149, 'Bargaining Tips',
    'Borobudur', 32, 44, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 55, 74, 'Comperhensive History',
    '#N/A', '#N/A', '#N/A', '#N/A',
    'Alun-alun Kidul', 23, 30, 'Night bazaar, light festival',
    'Club & Bar', 24, 32, 'Late night Beer Promo'],
    19: ['Keraton', 77, 103, 'Comperhensive History', 'Borobudur', 26, 35,
    'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 26, 35, 'Provide Comprehensive history, culture, & social guide', 'Malioboro', 110, 147, 'Bargaining Tips',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival', 'Club & Bar', 27, 36, 'Late night Beer Promo'],
    20: ['Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Borobudur', 29, 39, 'Provide Comprehensive history, culture, & social guide',
    'Keraton', 66, 89, 'Comperhensive History',
    'Alun-alun Kidul', 22, 29, 'Night bazaar, light festival',
    'Raminten', 27, 36, 'Cabaret Show',
    'Club & Bar', 25, 34, 'Late night Beer Promo'],
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
  trv: any;
  trvl: any;
  fv: any;
  series: any;

  ls =
  [{id: 0, name : 'Belanda'},
  {id: 1, name : 'Malaysia'},
  {id: 2, name : 'Jepang'},
  {id: 3, name : 'Amerika Serikat'},
  {id: 4, name : 'Singapura'},
  {id: 5, name : 'Perancis'},
  {id: 6, name : 'Jerman'},
  {id: 7, name : 'Australia'},
  {id: 8, name : 'Cina'},
  {id: 9, name : ' Lainnya MancaNegara'},
  {id: 12, name : 'Jawa Timur'},
  {id: 13, name : 'Jawa Tengah'},
  {id: 14, name : 'Jawa Barat'},
  {id: 15, name : 'DKI Jakarta'},
  {id: 16, name : 'Kalimantan Timur'},
  {id: 17, name : 'Banten'},
  {id: 18, name : 'Kalimantan Barat'},
  {id: 19, name : 'Lainnya Domestik'}];
 lst: any;
  constructor(private routing: ActivatedRoute) { }

  ngOnInit() {
    this.series =  this.routing.snapshot.queryParamMap.get('i');
    this.country =  Number(this.routing.snapshot.queryParamMap.get('a')) - 1;

    if (this.series === 'Domestic') {
        this.country = Number(Number(this.routing.snapshot.queryParamMap.get('a')) + 11);
    }
    console.log(this.country);
    const ll = this.ls.find(fruit => fruit.id === this.country );
    this.lst = ll.name;
    console.log(this.lst);
    this.visitData = this.month[0][this.country];
    this.visitDataOpt = this.opt[0][this.country];
    this.locations = this.visited[0][this.country];
    this.pieData =  this.travel[0][this.country];
    this.pieData2 =  this.tipe[0][this.country];
    this.pops = this.popular[0][this.country];
    this.trv = this.pack[0][this.country];
    this.trvl = this.packs[0][this.country];
    this.fv = this.fav[0][this.country];
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
