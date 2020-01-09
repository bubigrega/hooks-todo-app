import { useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todo.reducer";

export const useLocalStorageReducer = (key, initState) => {
  let todos;
  try {
    todos = JSON.parse(window.localStorage.getItem(key)) || initState;
  } catch (e) {
    todos = initState;
  }
  const [state, dispatch] = useReducer(todoReducer, todos);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
};
