import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-photo',
  templateUrl: './name-photo.component.html',
  styleUrls: ['./name-photo.component.scss']
})
export class NamePhotoComponent implements OnInit {

  /*photo: any = '../assets/Company Images/empl1.png';
  name = "Lindsey Stroud";*/
  employeeId = 2;
  employees = [
    {
      id: 1,
      name: 'Lindsey Stroud',
      photo: '../assets/Company Images/empl1.png'
    },
    {
      id: 2,
      name: 'Nicci Troiani',
      photo: '../assets/Company Images/empl2.png'
    },
    {
      id: 3,
      name: 'George Fields',
      photo: '../assets/Company Images/empl3.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
