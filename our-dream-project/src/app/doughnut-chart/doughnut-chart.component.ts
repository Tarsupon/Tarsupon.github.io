import { Component, OnInit } from '@angular/core';
import * as Chart from "chart.js";

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartLabels = ['Skype', 'Word', 'Windows', 'LinkedIn'];
  public doughnutChartData = [2.5, 2.8, 0.4, 1];
  public requiredDoughnutChartData = [3, 2, 1, 2];
  public doughnutChartType = 'doughnut';
  public doughnutChartBackgroundColors =["rgb(255,86,53)",'rgb(253,68,255)','rgb(24,113,255)','rgba(37,255,38,0.98)'];


  public labelsMaker(doughnutChartData:number[], requiredDoughnutChartData:number[], doughnutChartLabels: string[]) {
    let expression:string ="";
    let arrayResult = [];
    for(let i =0; i < doughnutChartLabels.length; i++){
      expression = `${doughnutChartLabels[i]}     ${doughnutChartData[i]} / ${requiredDoughnutChartData[i]}`;
      arrayResult.push(expression);
      expression = null;
    }
    return arrayResult;
  }

  public totalMaker(doughnutChartData:number[], requiredDoughnutChartData:number[]){
    let required: number = 0;
    let existing: number = 0;
    for(let i =0; i < doughnutChartData.length; i++){
      existing += doughnutChartData[i];
      required += requiredDoughnutChartData[i];
    }
    let expression: string = `${existing} / ${required}`;
    return expression;
  }

  private chart: Chart;
  value: string = this.totalMaker(this.doughnutChartData, this.requiredDoughnutChartData);


  constructor() {
  }

  ngOnInit() {

    this.chart = new Chart('canvas', {
      type: this.doughnutChartType,
      data: {
        labels: this.labelsMaker(this.doughnutChartData, this.requiredDoughnutChartData, this.doughnutChartLabels),
        datasets: [
          {
            data: this.doughnutChartData,
            backgroundColor: this.doughnutChartBackgroundColors,
            fill: false
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
          fullWidth: true,
          labels:{

          },
        },
        title: {
          display: true,
          text: 'Workload'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips:{

        }
      }
    });

  }
}

