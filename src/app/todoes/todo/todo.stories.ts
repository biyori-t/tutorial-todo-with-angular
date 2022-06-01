import { Meta, StoryObj } from '@storybook/angular';
import { TodoComponent } from './todo.component';

import { screen, fireEvent } from '@storybook/testing-library';

export default {
  component: TodoComponent,
} as Meta;

export const Default: StoryObj<TodoComponent> = {
  render: (args) => ({
    template: `<app-todo [todo]="todo"></app-todo>`,
    props: args,
  }),
  args: {
    todo: 'Todo をここに表示する',
  },
};

export const Delete: StoryObj<TodoComponent> = {
  render: (args) => ({
    template: `<app-todo [todo]="todo"></app-todo>`,
    props: args,
  }),
  args: {
    todo: 'Todo',
  },
  play: async () => {
    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);
  },
};
