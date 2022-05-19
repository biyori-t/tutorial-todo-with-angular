import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  @Output() onAddButton = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addTodo(todo: HTMLInputElement) {
    if (todo.value) {
      this.onAddButton.emit(todo.value);
      todo.value = '';
    }
  }
}