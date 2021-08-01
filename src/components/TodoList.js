import React from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if(todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {index < todos.length -1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
    return null;
  };

export default TodoList;
