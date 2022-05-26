import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TodoComponent } from './todo.component';

export default {
  component: TodoComponent,
  decorators: [
    moduleMetadata({
      declarations: [TodoComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Todo',
} as Meta;

const Template: Story<TodoComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  todo: 'Todo をここに表示する',
};
