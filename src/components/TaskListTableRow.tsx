import React from 'react';
import { TableCell, TableRow, MenuItem, Select } from '@material-ui/core';

import { Task, Status } from '../api/types';

type TaskListTableRowProps = {
  task: Task,
  handleTaskStatusChange: (task: Task, status: Status) => void,
};

export const TaskListTableRow: React.FC<TaskListTableRowProps> = ({
  task,
  handleTaskStatusChange,
}) => {
  return (
    <TableRow className='TaskListTableRow'>
      <TableCell>{task.title}</TableCell>
      <TableCell>
        <Select
          value={task.status}
          onChange={(event) => handleTaskStatusChange(task, event.target.value as Status)}>
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="doing">Doing</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </Select>
      </TableCell>
    </TableRow>
  );
};
