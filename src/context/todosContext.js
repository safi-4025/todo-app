import React, { createContext } from "react";
import reducer from "../reducers/todo.reducer";
import { useLocalStorageReducer } from "../components/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Reading", completed: false },
  { id: 2, task: "Writing", completed: true },
];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    reducer
  );
  return (
    <TodoContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
};
