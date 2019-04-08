import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.scss']
})
export class RoleSelectComponent implements OnInit {
  @Input() role: string;
  roles: Array<string> = ['Project Manager', 'Employee', 'Owner', 'Admin', 'HR Manager'];
  constructor() { }

  ngOnInit() {
  }

}
