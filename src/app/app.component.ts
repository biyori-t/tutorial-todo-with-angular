import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoes: string[] = [];

  constructor() {}

  addTodo(todo: HTMLInputElement) {
    if (todo.value) {
      this.todoes.push(todo.value);
      todo.value = '';
    }
  }
}
