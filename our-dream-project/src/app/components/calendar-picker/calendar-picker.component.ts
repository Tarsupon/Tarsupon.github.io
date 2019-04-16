
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.scss']
})
export class CalendarPickerComponent implements OnInit {
   today: string;
   value: string;

  constructor() {
    this.today = new Date().toISOString().split('T')[0];
  }

  ngOnInit() {

  }

}

