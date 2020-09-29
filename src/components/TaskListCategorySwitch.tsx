import React from 'react';
import { Category } from '../api/types';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

type TaskListCategorySwitchProps = {
  currentCategory: Category,
  handleSwitchCategory: (category: Category) => void,
};

export const TaskListCategorySwitch: React.FC<TaskListCategorySwitchProps> = ({
  currentCategory,
  handleSwitchCategory,
}) => {
  return (
    <div className="TaskListCategorySwitch">
      <ToggleButtonGroup
        value={currentCategory}
        exclusive
        onChange={(_event, value) => {
          if (value !== null && currentCategory !== value) {
            handleSwitchCategory(value);
          }
        }}>
        <ToggleButton value="todo">Todo</ToggleButton>
        <ToggleButton value="done">Done</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
