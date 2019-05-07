import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Log} from "../../entities/log";
import {ProjecySelectService} from "./projecy-select.service";

@Component({
  selector: 'app-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.scss']
})
export class ProjectSelectComponent implements OnInit {
  @Input() logs: Log[];
  @Output() onProjectSelectChange = new EventEmitter();

  get projectName():string{
    return this.projectSelectService.projectNameForService;
  }
  @Input() set projectName(value: string){
    this.projectSelectService.projectNameForService = value;
  }

  constructor(public projectSelectService: ProjecySelectService) { }

  ngOnInit() {
  }

  sendProjectSelectValue(projectName: string) {
    this.onProjectSelectChange.emit(projectName);
  }
}
