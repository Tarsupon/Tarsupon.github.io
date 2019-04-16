import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-name-tag',
  templateUrl: './project-name-tag.component.html',
  styleUrls: ['./project-name-tag.component.scss']
})
export class ProjectNameTagComponent implements OnInit {

  color = "yellow";
  name = "Skype";
  tag = "#SKY";

  constructor() { }

  ngOnInit() {
  }

}
