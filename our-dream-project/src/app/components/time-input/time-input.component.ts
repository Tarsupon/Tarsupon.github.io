import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss']
})
export class TimeInputComponent implements OnInit {
  @Input() time: number;

  @Output() onTimeInputChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendTimeInputValue(time: number) {
    this.onTimeInputChange.emit(time);
  }
}
