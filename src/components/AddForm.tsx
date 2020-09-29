import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

import { Task } from '../api/types';
import { idIterator } from '../api/id';

type AddFormProps = {
  handleAddTask: (task: Task) => void,
};

export const AddForm: React.FC<AddFormProps> = ({ handleAddTask }) => {
  const [title, setTitle] = useState<string>('');

  return (
    <div className="AddForm">
      <Typography variant="h3">Add Task</Typography>
      <TextField
        label="Task title"
        value={title}
        required
        onChange={(event) => setTitle(event.target.value)} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (title.length > 0) {
            handleAddTask({ id: idIterator.next().value, title, status: 'new' });
            setTitle('');
          }
        }}>
        Add
      </Button>
    </div>
  );
};
