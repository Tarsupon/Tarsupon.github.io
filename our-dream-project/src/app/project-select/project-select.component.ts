import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.scss']
})
export class ProjectSelectComponent implements OnInit {
  @Input() mainProject: string;
  projects: Array<string> = ['Windows', 'Chrome', 'BestProjectEver'];
  constructor() { }

  ngOnInit() {
  }

}
