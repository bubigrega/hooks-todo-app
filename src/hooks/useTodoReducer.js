import { useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todo.reducer";

export const useTodoReducer = initState => {
  let todos;
  try {
    todos = JSON.parse(window.localStorage.getItem("todos")) || initState;
  } catch (e) {
    todos = initState;
  }
  const [state, dispatch] = useReducer(todoReducer, todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};
