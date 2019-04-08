import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-items',
  templateUrl: './sidebar-items.component.html',
  styleUrls: ['./sidebar-items.component.scss']
})
export class SidebarItemsComponent implements OnInit {
  companySettingsImg: any = '../assets/Company Images/Settings.png';
  companyProfileImg: any = '../assets/Company Images/Profile.png';
  companyDashboardImg: any = '../assets/Company Images/Dashboard.png';
  companyProjectsImg: any = '../assets/Company Images/Project.png';
  companyEmployeesImg: any = '../assets/Company Images/Employees.png';
  companyReportsImg: any = '../assets/Company Images/Reports.png';
  companyTimesheetsImg: any = '../assets/Company Images/Timesheets.png';
  companyTimelogsImg: any = '../assets/Company Images/Timelogs.png';

  constructor() { }

  ngOnInit() {
  }

}
