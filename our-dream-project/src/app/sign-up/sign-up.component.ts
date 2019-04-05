import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  show: boolean;

  constructor() {
    this.show = false;
  }
  password() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
