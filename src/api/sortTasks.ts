import { Task } from "./types";

const statusToOrder = {
    'doing': 0,
    'new': 1,
    'pending': 2,
    'done': 3,
};

export const sortTasks = (tasks: Task[]) => {
    return [...tasks].sort((task1, task2) => {
        return (statusToOrder[task1.status] - statusToOrder[task2.status]);
    });
};
