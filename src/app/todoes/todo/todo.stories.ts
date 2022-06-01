import { Meta, StoryObj } from '@storybook/angular';
import { TodoComponent } from './todo.component';

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
