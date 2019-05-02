import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TableColumn} from "../../entities/table-column";

@Component({
  selector: 'app-timelog-table',
  templateUrl: './timelog-table.component.html',
  styleUrls: ['./timelog-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TimelogTableComponent implements OnInit {
  @Input() columns: string[];

  constructor() { }

  public ngOnInit(): void {
  }

}
