import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-company-project-settings',
  templateUrl: './company-project-settings.component.html',
  styleUrls: ['./company-project-settings.component.scss']
})
export class CompanyProjectSettingsComponent implements OnInit {
  companyName: string = "Microsoft Inc.";
  saveButtonName: string = "Save";
  days: string[] = ['Sunday', 'Monday'];
  selectedHours: number = 40;
  periods = [
    {
      id: 1,
      name: 'Day',
    },
    {
      id: 2,
      name: 'Week',
    },
  ];

  selectedId = 2;
  selected = new FormControl(this.periods[this.selectedId - 1]);
  constructor() { }

  ngOnInit() {
  }

}
