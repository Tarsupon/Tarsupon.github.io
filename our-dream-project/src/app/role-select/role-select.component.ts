import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss']
})
export class RoleSelectComponent implements OnInit {
  @Input() role: string;
  roles = [
    {
      id: 1,
      name: 'Project Manager'
    },
    {
      id: 2,
      name: 'Employee'
    },
    {
      id: 3,
      name: 'Owner'
    },
    {
      id: 4,
      name: 'Admin'
    },
    {
      id: 5,
      name: 'HR Manager'
    }
  ];

  selectedRoleId = 2;
  selectedRole = new FormControl(this.roles[this.selectedRoleId - 1]);
  constructor() { }

  ngOnInit() {
  }

}
