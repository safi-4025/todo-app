import React, { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import TodoList from './TodoList'; 

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Reading books', completed: false },
    { id: 2, task: 'Walking', completed: true },
    { id: 3, task: 'Wash the dishes', completed: false }
  ]

  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOCS!</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  )
}

export default TodoApp
