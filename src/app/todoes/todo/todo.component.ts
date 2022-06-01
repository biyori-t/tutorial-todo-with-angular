import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo?: Todo;
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(value: number) {
    this.delete.emit(value);
  }
}
