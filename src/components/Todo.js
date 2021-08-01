import React from "react";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const Todo = ({ task, completed }) => {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} />
      <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete'>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label='Edit'>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
