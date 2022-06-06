import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoStoreService } from 'src/app/store/todo-store/todo-store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo?: Todo;

  constructor(private readonly todoStore: TodoStoreService) {}

  ngOnInit(): void {}

  onDelete(id: string) {
    this.todoStore.delete(id);
  }
}
