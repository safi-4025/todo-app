import React from "react";
import UseInputState from "./UseInputState";
import { TextField } from "@material-ui/core";

const EditTodoForm = ({ editTodo, id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = UseInputState(task);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toggleEditForm();

    }}>
    <TextField
      fullWidth
      autoFocus
      margin="normal"
      label="Type New Todo"
      value={value}
      onChange={handleChange}
    />
    </form>
  );
};

export default EditTodoForm;
