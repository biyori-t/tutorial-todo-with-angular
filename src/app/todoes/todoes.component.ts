import { Component } from '@angular/core';
import { TodoStoreService } from '../store/todo-store/todo-store.service';

@Component({
  selector: 'app-todoes',
  templateUrl: './todoes.component.html',
  styleUrls: ['./todoes.component.scss'],
})
export class TodoesComponent {
  todoes$ = this.todoStore.todoes$;

  constructor(private readonly todoStore: TodoStoreService) {}
}
