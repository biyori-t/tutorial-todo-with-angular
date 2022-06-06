import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../store/todo-store/todo-store.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  constructor(private readonly todoStore: TodoStoreService) {}

  ngOnInit(): void {}

  addTodo(todoTitle: HTMLInputElement) {
    if (todoTitle.value) {
      this.todoStore.add(todoTitle.value);

      todoTitle.value = '';
    }
  }
}
