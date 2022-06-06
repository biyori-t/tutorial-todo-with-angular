import { Injectable } from '@angular/core';
import { todoStore } from './todo.store';
import { select, setProp } from '@ngneat/elf';
import { createTodo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  get todoes$() {
    return todoStore.pipe(select((state) => state.todoes));
  }

  constructor() {}

  add(name: string) {
    const todo = createTodo(name);
    todoStore.update(setProp('todoes', (todoes) => [...todoes, todo]));
  }

  delete(id: string) {
    todoStore.update(
      setProp('todoes', (todoes) => todoes.filter((todo) => todo.id != id))
    );
  }
}
