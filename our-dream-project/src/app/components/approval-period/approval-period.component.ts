import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-approval-period',
  templateUrl: './approval-period.component.html',
  styleUrls: ['./approval-period.component.scss']
})
export class ApprovalPeriodComponent implements OnInit {
  @Input() ngStyle: {[key: string]: string;};
  periods = [
    {
      id: 1,
      name: '1 Week',
    },
    {
      id: 2,
      name: '2 Weeks',
    },
    {
      id: 3,
      name: '1 month',
    },
    {
      id:4,
      name: "I don't need approvals",
    },
  ];
  selectedId = 2;
  selected = new FormControl(this.periods[this.selectedId - 1]);

  lessThanValue: number = 10 ;
  moreThanValue: number = 15;

  notifications = [
    {
      id: 1,
      name: 'Warn',
      backgroundColor: 'rgba(255, 214, 0, 0.4)',
    },
    {
      id: 2,
      name: 'Error',
      backgroundColor: 'rgba(255, 0, 0, 0.4)',
    },
    ];
  selectedWarnNotificationId = 1;
  selectedErrorNotificationId = 2;
  selectedWarnNotification = new FormControl(this.notifications[this.selectedWarnNotificationId - 1]);
  selectedErrorNotification = new FormControl(this.notifications[this.selectedErrorNotificationId - 1]);

  constructor() { }

  ngOnInit() {
  }
}
