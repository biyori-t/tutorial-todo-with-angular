import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoes: string[] = [];

  constructor() {}

  addTodo(todo: string) {
    this.todoes.push(todo);
  }
}
