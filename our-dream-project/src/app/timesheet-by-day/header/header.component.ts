import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  questionImg: any ="../assets/Company Images/question.png";
  bellImg: any = "../assets/Company Images/bell.png";
  logoutImg: any = "../assets/Company Images/logout.png";

  constructor() { }

  ngOnInit() {
  }

}
