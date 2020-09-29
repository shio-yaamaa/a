import { TasksData } from './types';

export const summarize = (tasksData: TasksData) => {
    return `You have ${tasksData.todo.length} tasks to do`;
};
