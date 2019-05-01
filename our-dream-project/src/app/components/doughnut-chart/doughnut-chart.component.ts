import { Component, OnInit } from '@angular/core';
import * as Chart from "chart.js";

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})


export class DoughnutChartComponent implements OnInit {

  private DOUGHNUT_CHART_TYPE: string = "doughnut";

  private chart: Chart;
  public totalValue;

  constructor() {
    this.totalValue = this.getTotalValue(this.testDonutChartData);
  }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: this.DOUGHNUT_CHART_TYPE,
      data: {
        labels: this.getLabels(this.testDonutChartData),
        datasets: [
          {
            data: this.testDonutChartData.map(item => {return item.existingData}),
            backgroundColor: this.testDonutChartData.map(item => {return item.backgroungColor}),
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

 private testDonutChartData:ChartData[] = [
    {
      projectName: "Skype",
      existingData: 2.5,
      requiredData: 3,
      backgroungColor: "rgb(255,86,53)",
    },
    {
      projectName: "Word",
      existingData: 2.8,
      requiredData: 2,
      backgroungColor: "rgb(253,68,255)",
    },
    {
      projectName: "Windows",
      existingData: 0.4,
      requiredData: 1,
      backgroungColor: "rgb(24,113,255)",
    },
    {
      projectName: "Word",
      existingData: 1,
      requiredData: 2,
      backgroungColor: "rgba(37,255,38,0.98)",
    },
  ];

  private getLabels (donutChartData: ChartData[]): string[] {
    return donutChartData.map(item => {
      return `${item.projectName}   ${item.existingData} / ${item.requiredData}`;
    });
  }

  private getTotalValue (donutChartData: ChartData[]): string{
    const totalExisting = donutChartData.reduce((acc, item) => acc + item.existingData, 0);
    const totalRequired = donutChartData.reduce((acc, item) => acc + item.requiredData, 0);
    return `${totalExisting}/ ${totalRequired}`;
  }
}

export class ChartData{
  projectName:  string = "";
  existingData: number = 0;
  requiredData: number = 0;
  backgroungColor: string = "";
}
