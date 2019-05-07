import {
  Component,
  ComponentFactoryResolver, EventEmitter,
  Input,
  OnInit, Output,
} from '@angular/core';
import {Log} from "../../entities/log";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],

})
export class RowComponent {
  @Input() rowId: number;
  @Input() isAddRow: boolean;

  @Output() onClick = new EventEmitter();
  @Output() onAddClick = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  sendId(rowId: number) {
    this.onClick.emit(rowId);
  }

  sendEvent($event: MouseEvent) {
    this.onAddClick.emit($event);
  }
}
