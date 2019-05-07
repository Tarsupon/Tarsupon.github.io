import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TableColumn} from "../../entities/table-column";

@Component({
  selector: 'app-timelog-table',
  templateUrl: './timelog-table.component.html',
  styleUrls: ['./timelog-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TimelogTableComponent implements OnInit {
  @Input() columns: TableColumn[];

  constructor() { }

  public ngOnInit(): void {
  }

}
