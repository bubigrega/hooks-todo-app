// COMENTED OUT AFTER REFACTOR WITH CONTEXT AND USEREDUCER
// COMENTED OUT 2ND TIME AFTER REFACTOR WITH CUSTOM USETODOREDUCER HOOK

import React, {
  createContext
  // useReducer
} from "react";
import uuid from "uuid/v4";
// import { todoReducer } from "../reducers/todo.reducer";
// import useTodoState from "../hooks/useTodoState";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

const initialTodos = [
  { id: uuid(), task: "clean kitchen", completed: true },
  { id: uuid(), task: "clean living room", completed: true },
  { id: uuid(), task: "clean beadroom", completed: false }
];

export const TodoStateProvider = props => {
  // const todosStateAndMethods = useTodoState(initialTodos);
  // const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const [todos, dispatch] = useLocalStorageReducer("todos", initialTodos);

  return (
    <TodoStateContext.Provider
      // value={todosStateAndMethods}
      value={todos}
    >
      <div>
        <TodoDispatchContext.Provider value={dispatch}>
          {props.children}
        </TodoDispatchContext.Provider>
      </div>
    </TodoStateContext.Provider>
  );
};
