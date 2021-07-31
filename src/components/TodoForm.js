import React from 'react';
import UseInputState from './UseInputState';
import { Paper, TextField } from '@material-ui/core';

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = UseInputState('');
  return (
    <Paper>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  )
}

export default TodoForm
