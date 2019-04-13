import {Component, Input, OnInit, Output} from '@angular/core';
import * as Chart from "chart.js";

class BarItem {
  barItemName: string;
  size: number;
  sizeStr: number;
  color: any;
  descriprion: string;
  id: number;
}

class Bar {
  name: string;
  items: BarItem[];
}

@Component({
  selector: 'app-stacked-diagram',
  templateUrl: './stacked-diagram.component.html',
  styleUrls: ['./stacked-diagram.component.scss']
})
export class StackedDiagramComponent implements OnInit {

  @Input() bars:Bar[];

  // @Output() barItemSelect();
  // @Output() barSelect();
  public chart: Chart;
  public chartName: string;
  public barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Skype',
      backgroundColor: "rgb(255,86,53)",
      data: [5,3,4,7,2,1,2]
    }, {
      label: 'Word',
      backgroundColor: 'rgb(253,68,255)',
      data: [2,1,3,2,4,5,2]
    }, {
      label: 'LinkedIn',
      backgroundColor: 'rgb(24,113,255)',
      data: [3,2,4,1,3,2,1]
    }]

  };
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: this.barChartData,
      options: {
        title: {
          display: true,
          text: this.chartName
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }

}
