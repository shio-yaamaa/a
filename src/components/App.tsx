import React, { useState, useCallback } from 'react';
import { Typography } from '@material-ui/core';

import { Task, Status, TasksData } from '../api/types';
import { tasksData as initialTasksData } from '../api/initialData';
import { summarize } from '../api/summary';
import { sortTasks } from '../api/sortTasks';
import { TaskList } from './TaskList';
import { AddForm } from './AddForm';

export const App: React.FC<{}> = () => {
  const [tasksData, setTasksData] = useState<TasksData>(initialTasksData);

  const handleAddTask = useCallback(
    (task: Task) => {
      setTasksData({
        ...tasksData,
        todo: sortTasks([...tasksData.todo, task]),
      });
    },
    [tasksData]
  );

  const handleTaskStatusChange = useCallback(
    (task: Task, status: Status) => {
      const updatedTodoTasks = tasksData.todo.filter((todoTask) => todoTask.id !== task.id);
      const updatedDoneTasks = tasksData.done.filter((doneTask) => doneTask.id !== task.id);
      const updatedTask = { ...task, status };
      (status === 'done' ? updatedDoneTasks : updatedTodoTasks).push(updatedTask);
      setTasksData({
        todo: sortTasks(updatedTodoTasks),
        done: sortTasks(updatedDoneTasks),
      });
    },
    [tasksData]
  );

  return (
    <div className="App">
      <header>
        <Typography variant="h2">{summarize(tasksData)}</Typography>
      </header>
      <section>
        <TaskList tasksData={tasksData} handleTaskStatusChange={handleTaskStatusChange} />
      </section>
      <section>
        <AddForm handleAddTask={handleAddTask} />
      </section>
    </div>
  );
};
