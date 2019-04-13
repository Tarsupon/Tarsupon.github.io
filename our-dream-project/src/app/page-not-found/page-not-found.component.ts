import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  notFoundLogo: any = '../assets/Company Images/404.png';

  constructor() { }

  ngOnInit() {
  }

}
