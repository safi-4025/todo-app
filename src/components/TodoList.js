import React, { useContext } from "react";
import { TodoContext } from "../context/todosContext";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <>
              <Todo {...todo} key={todo.id} />
              {index < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
