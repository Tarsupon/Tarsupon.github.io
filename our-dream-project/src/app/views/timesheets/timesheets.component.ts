import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})
export class TimesheetsComponent implements OnInit {
  leftButtonName: string = 'Day';
  rightButtonName: string = 'Week';
  rows =[
    {
      id: 1,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
