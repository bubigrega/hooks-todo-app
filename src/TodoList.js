import React from "react";
import List from "@material-ui/core/List";
import TodoForm from "./TodoForm";
import Paper from "@material-ui/core/Paper";

import Todo from "./Todo";

const TodoList = ({
  todos,
  addTodo,
  deleteTodo,
  toggleCompleted,
  editTodo
}) => {
  return (
    <Paper>
      <TodoForm addTodo={addTodo} />
      <List>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            addTodo={addTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
