import React, { createContext } from "react";
import uuid from "uuid/v4";
import useTodoState from "../hooks/useTodoState";

export const TodoStateContext = createContext();

const initialTodos = [
  { id: uuid(), task: "clean kitchen", completed: true },
  { id: uuid(), task: "clean living room", completed: true },
  { id: uuid(), task: "clean beadroom", completed: false }
];

export const TodoStateProvider = props => {
  const todosStateAndMethods = useTodoState(initialTodos);

  return (
    <TodoStateContext.Provider value={todosStateAndMethods}>
      {props.children}
    </TodoStateContext.Provider>
  );
};
