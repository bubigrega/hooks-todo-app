import uuid from "uuid/v4";

import useLocalStorage from "./useLocalStorage";

export default initState => {
  const [todos, setTodos] = useLocalStorage("todos", initState);

  return {
    todos,
    addTodo: task => {
      setTodos([...todos, { id: uuid(), task, completed: false }]);
    },
    deleteTodo: id => {
      setTodos(todos.filter(t => t.id !== id));
    },
    toggleCompleted: id => {
      setTodos(
        todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    },
    editTodo: (id, task) => {
      setTodos(todos.map(t => (t.id === id ? { ...t, task } : t)));
    }
  };
};
