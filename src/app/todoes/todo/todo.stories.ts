import { Meta, StoryObj } from '@storybook/angular';
import { TodoComponent } from './todo.component';

import { screen, fireEvent } from '@storybook/testing-library';
import { createTodo } from 'src/app/models/todo.model';

export default {
  component: TodoComponent,
} as Meta;

export const Default: StoryObj<TodoComponent> = {
  render: (args) => ({
    template: `<app-todo [todo]="todo"></app-todo>`,
    props: args,
  }),
  args: {
    todo: createTodo('Todo'),
  },
};

export const Delete: StoryObj<TodoComponent> = {
  name: '削除するボタンを押す',
  render: (args) => ({
    template: `<app-todo [todo]="todo"></app-todo>`,
    props: args,
  }),
  args: {
    todo: createTodo('Todo'),
  },
  play: async () => {
    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);
  },
};
