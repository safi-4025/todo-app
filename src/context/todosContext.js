import React, { createContext, useReducer } from "react";
import reducer from "../reducers/todo.reducer";
import useTodoState from "../components/useTodoState";

const defaultTodos = [
  { id: 1, task: "Reading", completed: false },
  { id: 2, task: "Writing", completed: true },
];

export const TodoContext = createContext();

export const TodosProvider = (props) => {
  const [todos, dispatch] = useReducer(reducer, defaultTodos);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};
