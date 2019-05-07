import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-comment',
  templateUrl: './table-comment.component.html',
  styleUrls: ['./table-comment.component.scss']
})
export class TableCommentComponent implements OnInit {
  @Input() comment: string;

  @Output() onTableCommentChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendTableCommentValue(comment: string) {
    this.onTableCommentChange.emit(comment);
  }
}
