import React, { useState } from 'react';
import TodoList from './TodoList'; 
import TodoForm from './TodoForm';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Reading books', completed: false },
    { id: 2, task: 'Walking', completed: true },
    { id: 3, task: 'Wash the dishes', completed: false }
  ]

  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, {id: 4, task: newTodoText, completed: false}])
  }
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
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  )
}

export default TodoApp
