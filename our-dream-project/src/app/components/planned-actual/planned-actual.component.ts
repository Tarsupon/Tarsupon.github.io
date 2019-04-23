import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planned-actual',
  templateUrl: './planned-actual.component.html',
  styleUrls: ['./planned-actual.component.scss']
})
export class PlannedActualComponent implements OnInit {
  @Input() id: number;
  defaultMaxValueOfBar = 40;
  defaultLengthOfBar = 220;
  maxLengthOfBar = 248;
  values = [
    {
      id: 1,
      value: 32,
      max: 40,
      color: '#FF0000'
    },
    {
      id: 2,
      value: 32,
      max: 32,
      color: '#00C537'
    },
    {
      id: 3,
      value: 40,
      max: 32,
      color: '#FF0000'
    },
    {
      id: 4,
      value: 48,
      max: 40,
      color: '#FFD600'
    },
    {
      id: 5,
      value: 29,
      max: 32,
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
    if (value <= max) {
      return '90%';
    } else if (Math.abs(value - max) <= 5) {
      return '75%';
    } else {
      return ((max * 100 / value) - 10) + '%';
    }
  }
}
