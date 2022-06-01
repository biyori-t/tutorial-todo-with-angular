import { Meta, StoryObj } from '@storybook/angular';
import { TodoAddComponent } from './todo-add.component';

export default {
  component: TodoAddComponent,
} as Meta;

export const Default: StoryObj<TodoAddComponent> = {
  render: (args) => ({
    template: `<app-todo-add></app-todo-add>`,
    props: args,
  }),
};
