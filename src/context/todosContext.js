import React, {createContext} from 'react';
import useTodoState from '../components/useTodoState';

const defaultTodos = [
  {id: 1, task: 'Reading', completed: false},
  {id: 2, task: 'Writing', completed: true}
];

export const TodoContext = createContext();

export const TodosProvider = props => {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodoContext.Provider value={todosStuff}>
      {props.children}
    </TodoContext.Provider>
  )
}