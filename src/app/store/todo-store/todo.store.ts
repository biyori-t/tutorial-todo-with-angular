import { createStore, withProps } from '@ngneat/elf';
import { createTodo, Todo } from '../../models/todo.model';

interface TodoProps {
  todoes: Todo[];
}

export const todoStore = createStore(
  { name: 'todo' },
  withProps<TodoProps>({
    todoes: [],
  })
);
