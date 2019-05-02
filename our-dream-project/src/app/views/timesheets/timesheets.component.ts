import { Component, OnInit } from '@angular/core';
import {TableRow} from "../../entities/table-row";

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})
export class TimesheetsComponent implements OnInit {
  leftButtonName: string = 'Day';
  rightButtonName: string = 'Week';

  rows: TableRow[] =[
    {
      id: 1,
      // for what we need number here?
      // can u help just with test data?
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
