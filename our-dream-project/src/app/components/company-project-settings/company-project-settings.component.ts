import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-project-settings',
  templateUrl: './company-project-settings.component.html',
  styleUrls: ['./company-project-settings.component.scss']
})
export class CompanyProjectSettingsComponent implements OnInit {
  companyName: string = "Microsoft Inc.";
  saveButtonName: string = "Save";

  constructor() { }

  ngOnInit() {
  }

}
