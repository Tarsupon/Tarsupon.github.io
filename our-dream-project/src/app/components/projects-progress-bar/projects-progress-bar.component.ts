import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-progress-bar',
  templateUrl: './projects-progress-bar.component.html',
  styleUrls: ['./projects-progress-bar.component.scss']
})
export class ProjectsProgressBarComponent implements OnInit {
  @Input() id: number;
  defaultMaxValueOfBar = 449;
  defaultLengthOfBar = 220;
  maxLengthOfBar = 220;
  values = [
    {
      id: 1,
      value: 265.5,
      max: 449,
      color: '#00C537'
    },
    {
      id: 2,
      value: 0,
      max: 449,
      color: '#00C537'
    },
    {
      id: 3,
      value: 631,
      max: 449,
      color: '#FF0000'
    },
    {
      id: 4,
      value: 449,
      max: 449,
      color: '#FFD600'
    },
    {
      id: 5,
      value: 183.5,
      max: 449,
      color: '#00C537'
    },
  ];
  bar = this.values[0];
  ngOnInit() {
    this.bar = this.values.find(x => x.id === this.id);
  }
  public getSizeOfBar(value: number, max: number): string {
    const maxValue = Math.max(value, max);
    const result = (this.defaultLengthOfBar * maxValue / this.defaultMaxValueOfBar);
    return (result <= this.maxLengthOfBar) ? (result + 'px') : (this.maxLengthOfBar + 'px');
  }

  public getPositionOfTitle(value: number, max: number): string {
    return (max <= value) ? '90%' : ((value * 100 / max) - 10) + '%';
  }
}
