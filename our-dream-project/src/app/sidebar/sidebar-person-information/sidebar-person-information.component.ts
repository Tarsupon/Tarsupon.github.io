import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-person-information',
  templateUrl: './sidebar-person-information.component.html',
  styleUrls: ['./sidebar-person-information.component.scss']
})
export class SidebarPersonInformationComponent implements OnInit {
  logoItems: any = `../assets/Company Images/logo-small.png`;
  photo: any = '../assets/Company Images/duck.png';

  constructor() { }

  ngOnInit() {
  }

}
