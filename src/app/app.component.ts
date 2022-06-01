import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoes: Todo[] = [];

  constructor() {}

  addTodo(todo: Todo) {
    this.todoes.push(todo);
  }
}
