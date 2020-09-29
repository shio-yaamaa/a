import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import { Status, Task, TasksData, Category } from '../api/types';
import { TaskListCategorySwitch } from './TaskListCategorySwitch';
import { TaskListTableRow } from './TaskListTableRow';

type TaskListProps = {
  tasksData: TasksData,
  handleTaskStatusChange: (task: Task, status: Status) => void,
};

export const TaskList: React.FC<TaskListProps> = ({
  tasksData,
  handleTaskStatusChange,
}) => {
  const [category, setCategory] = useState<Category>('todo');
  const tasks = tasksData[category];

  return (
    <div className="TaskList">
      <TaskListCategorySwitch
        currentCategory={category}
        handleSwitchCategory={(category: Category) => setCategory(category)} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tasks.map((task) => <TaskListTableRow
              key={task.id}
              task={task}
              handleTaskStatusChange={handleTaskStatusChange} />)
          }
        </TableBody>
      </Table>
    </div>
  );
};
