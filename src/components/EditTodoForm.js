import React, { useContext } from "react";
import UseInputState from "./UseInputState";
import { DispatchContext } from "../context/todosContext";
import { TextField } from "@material-ui/core";

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = UseInputState(task);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value })
        reset();
        toggleEditForm();
      }}
    >
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
