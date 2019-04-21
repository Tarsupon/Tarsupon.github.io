import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select-default-project',
  templateUrl: './select-default-project.component.html',
  styleUrls: ['./select-default-project.component.scss']
})
export class SelectDefaultProjectComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Windows',
    },
    {
      id: 2,
      name: 'Chrome',
    },
    {
      id: 3,
      name: 'BestProjectEver',
    }
  ];

  selectedProjectId = 2;
  selectedProject = new FormControl(this.projects[this.selectedProjectId - 1]);
  constructor() { }

  ngOnInit() {
  }

}
