import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  show: boolean;

  constructor() {
    this.show = false;
  }
  send() {
    this.show = !this.show;
  }

  ngOnInit() {
  }

}
