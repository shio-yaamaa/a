export type Status = 'new' | 'doing' | 'pending' | 'done';

export type Task = {
    id: number,
    title: string,
    status: Status,
};

export type TasksData = {
    todo: Task[],
    done: Task[],
};

export type Category = keyof TasksData;
