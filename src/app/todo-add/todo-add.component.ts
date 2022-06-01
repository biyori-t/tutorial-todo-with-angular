import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo, createTodo } from '../models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  @Output() onAddButton = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  addTodo(todo: HTMLInputElement) {
    if (todo.value) {
      this.onAddButton.emit(createTodo(todo.value));
      todo.value = '';
    }
  }
}
