import { TasksData } from './types';
import { sortTasks } from './sortTasks';
import { idIterator } from './id';

export const tasksData: TasksData = {
    todo: sortTasks([
        {
            id: idIterator.next().value,
            title: '本返す',
            status: 'new',
        },
        {
            id: idIterator.next().value,
            title: 'ダンボール片付ける',
            status: 'new',
        },
        {
            id: idIterator.next().value,
            title: 'アンケート返事',
            status: 'new',
        },
        {
            id: idIterator.next().value,
            title: '家計簿',
            status: 'doing',
        },
    ]),
    done: sortTasks([
        {
            id: idIterator.next().value,
            title: '終わったタスク1',
            status: 'done',
        },
        {
            id: idIterator.next().value,
            title: '終わったタスク2',
            status: 'done',
        },
        {
            id: idIterator.next().value,
            title: '終わったタスク3',
            status: 'done',
        },
        {
            id: idIterator.next().value,
            title: '終わったタスク4',
            status: 'done',
        },
    ]),
};