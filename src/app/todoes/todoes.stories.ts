import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TodoComponent } from './todo/todo.component';
import { TodoesComponent } from './todoes.component';

export default {
  component: TodoesComponent,
  decorators: [
    moduleMetadata({
      declarations: [TodoComponent],
    }),
  ],
} as Meta;

export const Default: StoryObj<TodoesComponent> = {
  render: (args) => ({
    template: `<app-todoes [todoes]="todoes"></app-todoes>`,
    props: args,
  }),
  args: { todoes: ['Test1', 'Test2', 'Test3'] },
};
