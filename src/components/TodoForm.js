import React, { useContext } from "react";
import UseInputState from "./UseInputState";
import { DispatchContext } from "../context/todosContext";
import { Paper, TextField } from "@material-ui/core";

const TodoForm = () => {
  const [value, handleChange, reset] = UseInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({type: 'ADD', task: value})
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
