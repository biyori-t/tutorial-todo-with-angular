import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TodoComponent } from './todo/todo.component';
import { TodoesComponent } from './todoes.component';
import { screen, fireEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';

export default {
  component: TodoesComponent,
  decorators: [
    moduleMetadata({
      declarations: [TodoComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const Default: StoryObj<TodoesComponent> = {
  render: (args) => ({
    template: `<app-todoes></app-todoes>`,
    props: args,
  }),
  args: {},
};

export const Delete: StoryObj<TodoesComponent> = {
  name: 'Todo を削除する',
  render: (args) => ({
    template: `<app-todoes></app-todoes>`,
    props: args,
  }),
  args: {},
  play: async () => {
    const deleteTodo2 = await screen.findByTestId('2');
    fireEvent.click(deleteTodo2);
  },
};
