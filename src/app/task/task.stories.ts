import { Meta, StoryObj } from '@storybook/angular';
import { defaultTask } from '../models/task.model';

import { TaskComponent } from './task.component';

export default {
  component: TaskComponent,
} as Meta;

export const Default: StoryObj<TaskComponent> = {
  render: (args) => ({
    template: `<app-task></app-task>`,
    props: args,
  }),
  args: { task: defaultTask() },
};

export const Pinned = {
  ...Default,
  args: {
    task: { ...defaultTask(), state: 'TASK_PINNED' },
  },
};

export const Archived = {
  ...Default,
  args: {
    task: { ...defaultTask(), state: 'TASK_ARCHIVED' },
    state: 'TASK_ARCHIVED',
  },
};
