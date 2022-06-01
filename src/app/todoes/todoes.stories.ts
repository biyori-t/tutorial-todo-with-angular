import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TodoComponent } from './todo/todo.component';
import { TodoesComponent } from './todoes.component';
import { screen, fireEvent } from '@storybook/testing-library';

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
  args: {
    todoes: [
      { id: 1, title: 'Todo1' },
      { id: 2, title: 'Todo2' },
      { id: 3, title: 'Todo3' },
    ],
  },
};

export const Delete: StoryObj<TodoesComponent> = {
  name: 'Todo を削除する',
  render: (args) => ({
    template: `<app-todoes [todoes]="todoes"></app-todoes>`,
    props: args,
  }),
  args: {
    todoes: [
      { id: 1, title: 'Todo1' },
      { id: 2, title: 'Todo2' },
      { id: 3, title: 'Todo3' },
    ],
  },
  play: async () => {
    const deleteTodo2 = await screen.findByTestId('2');
    fireEvent.click(deleteTodo2);
  },
};
