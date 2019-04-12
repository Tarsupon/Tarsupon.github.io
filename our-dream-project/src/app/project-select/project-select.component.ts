import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.scss']
})
export class ProjectSelectComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Windows',
      color: 'red'
    },
    {
      id: 2,
      name: 'Chrome',
      color: 'yellow'
    },
    {
      id: 3,
      name: 'BestProjectEver',
      color: 'green'
    }
  ];

  selectedProjectId = 2;
  selectedProject = new FormControl(this.projects[this.selectedProjectId - 1]);
  constructor() { }

  ngOnInit() {
  }

}
