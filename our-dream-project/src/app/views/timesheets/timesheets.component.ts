import { Component, OnInit } from '@angular/core';
import {TableRow} from "../../entities/table-row";
import {TableColumn} from "../../entities/table-column";

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
      number: 1,
      // for what we need number here?
      // can u help just with test data?
    },
  ];
  timelogTableColumns: TableColumn[]=[
    {
      id: 1,
      name: "Projects",
      priority: 1,
    },
    {
      id: 2,
      name: "Hours",
      priority: 1,
    },
    {
      id: 3,
      name: "Comments",
      priority: 1,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
