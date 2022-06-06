import { v4 as uuid } from 'uuid';

export interface Todo {
  id: string;
  title: string;
}

export function createTodo(title: string): Todo {
  const id = uuid();
  return { id, title };
}
