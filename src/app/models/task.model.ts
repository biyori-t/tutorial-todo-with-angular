export interface Task {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
}

export function defaultTask() {
  return {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2022, 5, 26, 21, 47),
  };
}
