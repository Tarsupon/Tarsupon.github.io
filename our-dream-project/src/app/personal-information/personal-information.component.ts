import { Component, OnInit } from '@angular/core';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  employeeInfo: object = {
    name: 'Duck',
    surname: 'Duckovich',
    role: 'ProjectManager',
    mail: 'duck@duck.com',
    phone: '+375291234567'
  };
  x = '<app-time-input></app-time-input>';
  constructor() { }

  ngOnInit() {
  }

}
