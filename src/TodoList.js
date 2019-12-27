import React from "react";
import List from "@material-ui/core/List";
import TodoForm from "./TodoForm";
import Paper from "@material-ui/core/Paper";

import Todo from "./Todo";

const TodoList = ({ todos, handleSave, handleDelete }) => {
  return (
    <Paper>
      <TodoForm handleSave={handleSave} />
      <List>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} handleDelete={handleDelete} />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
