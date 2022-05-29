import { Meta, StoryObj } from '@storybook/angular';
import { TodoComponent } from './todo.component';

export default {
  component: TodoComponent,
  excludeStories: /.*Data$/,
} as Meta<typeof TodoComponent>;

export const Default: StoryObj = {
  render: (args) => ({
    template: `<app-todo [todo]="todo"></app-todo>`,
    props: args,
  }),
  args: {
    todo: 'Todo をここに表示する',
  },
};
