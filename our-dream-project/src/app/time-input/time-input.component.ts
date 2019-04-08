import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent implements OnInit {
  workload = 40;
  constructor() { }

  ngOnInit() {
  }

}
