import React from "react";
import List from "@material-ui/core/List";
import TodoForm from "./TodoForm";

import Todo from "./Todo";

const TodoList = ({ todos, handleSave, handleDelete }) => {
  return (
    <List>
      <TodoForm handleSave={handleSave} />
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} handleDelete={handleDelete} />
      ))}
    </List>
  );
};

export default TodoList;
