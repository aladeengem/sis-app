import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initGraph();
    this.initDonutChart();
  }

  initGraph(){
    let canvas : any = document.getElementById("myChart");
    let ctx = canvas.getContext("2d");

    let myChart = new Chart(ctx, {
      type: 'bar',
        data: {
            labels: ['July', 'August', 'September', 'October'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgb(82, 128, 165)',
                    'rgb(151, 222, 193)',
                    'rgb(187, 201, 213)',
                    'rgb(255, 192, 110)',
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    })

    return myChart;
  }

  initDonutChart(){
    let canvas : any = document.getElementById("donutChart");
      let ctx = canvas.getContext("2d");
  
      let myChart = new Chart(ctx, {
        type: 'pie',
          data: {
              datasets: [{
                  label: '# of Votes',
                  data: [10, 20, 30],
                  backgroundColor: [
                    'rgb(82, 128, 165)',
                    'rgb(151, 222, 193)',
                    'rgb(187, 201, 213)',
                    'rgb(255, 192, 110)',
                ],
              }],
              labels: [
                'July', 'August', 'September', 'October'
            ]
          },
      })
  
      return myChart;
    }

}


