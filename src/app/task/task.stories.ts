import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';

export default {
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Task',
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: StoryObj<TaskComponent> = {
  render: (args) => ({
    props: {
      ...args,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};

export const Default = Object.assign(Template);
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2022, 5, 26, 21, 47),
  },
};

export const Pinned = Object.assign(Template);
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Object.assign(Template);
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
