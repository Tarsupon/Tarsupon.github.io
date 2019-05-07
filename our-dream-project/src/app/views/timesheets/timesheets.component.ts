import { Component, OnInit } from '@angular/core';

import {TableColumn} from "../../entities/table-column";
import {Log} from "../../entities/log";
import {TableRow} from "../../entities/table-row";
import {ProjecySelectService} from "../../components/project-select/projecy-select.service";

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})
export class TimesheetsComponent implements OnInit {
  leftButtonName: string = 'Day';
  rightButtonName: string = 'Week';

  timelogTableColumns: TableColumn[]=[
    {
      id: 1,
      name: "Projects",
    },
    {
      id: 2,
      name: "Hours",
    },
    {
      id: 3,
      name: "Comments",
    },
  ];
  logs: Log[] = [
    {
      projectName: "Skype",
      time: 2,
      comment: "hope dies at last"
    },
    {
      projectName: "Word",
      time: 3,
      comment: "hope dies at last"
    },
    {
      projectName: "hell",
      time: 666,
      comment: "praise the satan"
    },
  ];
  deletRow(rowId: number){
    return this.logs.splice(rowId,1);
  }

  get projectName():string{
    return this.projectSelectService.projectNameForService;
  }
  set projectName(value: string){
    this.projectSelectService.projectNameForService = value;
  }

  constructor(public projectSelectService: ProjecySelectService) { }

  ngOnInit() {
  }

  addRow(log: Log) {
    console.log(log);
    return this.logs.push(log);
  }
}
