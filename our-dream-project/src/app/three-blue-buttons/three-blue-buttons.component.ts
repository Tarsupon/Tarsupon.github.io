import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-blue-buttons',
  templateUrl: './three-blue-buttons.component.html',
  styleUrls: ['./three-blue-buttons.component.scss']
})
export class ThreeBlueButtonsComponent implements OnInit {
  leftButtonName: string;
  middleButtonName: string;
  rightButtonName: string;

  constructor() {
    //Override!!!!!
    this.leftButtonName = "Day";
    this.middleButtonName = "Week";
    this.rightButtonName = "Month";
  }

  ngOnInit() {
  }

}
