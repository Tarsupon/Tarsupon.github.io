import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  items: SelectedItem[]= [
    {color: "#31bd3c", projectName: "Word"},
    {color: "#bd3fac", projectName: "Skype"},
    {color: "#1476bd", projectName: "Ricardo"},
    ];

  constructor() { }

  ngOnInit() {
  }

}

class SelectedItem {
  color: string;
  projectName: string;
}
