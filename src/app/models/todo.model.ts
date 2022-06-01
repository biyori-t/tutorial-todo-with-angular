let id = 0;

export interface Todo {
  id: number;
  title: string;
}

export function createTodo(title: string): Todo {
  id += 1;
  return { id, title };
}
