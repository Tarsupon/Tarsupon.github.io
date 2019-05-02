import { Component, OnInit, Input } from "@angular/core";
import { CircleProgressComponent } from "ng-circle-progress";

@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.scss']
})
export class PendingApprovalComponent implements OnInit {
  @Input() id: number;
  valuesOfProgressCircle = [
    {
      id: 1,
      datePeriod: "14 - 20 Apr",
      value: 39.25,
      max: 40.75,
      color: "#00C537",
      active: false
    },
    {
      id: 2,
      datePeriod: "25 Mar - 1 Apr",
      value: 32.25,
      max: 40.75,
      color: "#FFD600",
      active: true
    },
    {
      id: 3,
      datePeriod: "14 - 20 Apr",
      value: 12.25,
      max: 40.75,
      color: "#FF0000",
      active: false
    }
  ];

  circle = this.valuesOfProgressCircle[0];
  ngOnInit() {
    this.circle = this.valuesOfProgressCircle.find(x => x.id === this.id);
  }

  changeCircleActivity() {
    this.circle.active = !this.circle.active;
  }
}
