import { Meta, StoryObj } from '@storybook/angular';
import { TitleComponent } from './title.component';

export default {
  component: TitleComponent,
} as Meta;

export const Default: StoryObj<TitleComponent> = {
  render: (args) => ({
    template: `<app-title [title]="title"></app-title>`,
    props: args,
  }),
  args: {
    title: 'Test Title',
  },
};
