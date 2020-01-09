import uuid from "uuid/v4";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case "DELETE":
      return state.filter(t => t.id !== action.id);
    case "TOGGLECOMPLETE":
      return state.map(t =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    case "EDIT":
      return state.map(t =>
        t.id === action.id ? { ...t, task: action.task } : t
      );
    default:
      return state;
  }
};
