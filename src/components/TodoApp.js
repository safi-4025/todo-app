import React, { useEffect } from "react";
import useTodoState from "./useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";

const TodoApp = () => {
  const initialTodos = [{id: 1, task: 'Reading', completed: false}];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS!</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1.2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
