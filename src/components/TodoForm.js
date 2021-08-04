import React, { useContext } from "react";
import UseInputState from "./UseInputState";
import { TodoContext } from "../context/todosContext";
import { Paper, TextField } from "@material-ui/core";

const TodoForm = () => {
  const [value, handleChange, reset] = UseInputState("");
  const { addTodo } = useContext(TodoContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
