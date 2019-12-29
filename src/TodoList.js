import React from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import TodoForm from "./TodoForm";

import Todo from "./Todo";

const TodoList = ({
  todos,
  addTodo,
  deleteTodo,
  toggleCompleted,
  editTodo
}) => {
  const todosLength = todos.length;
  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.length ? (
        <Paper>
          <List>
            {todos.map((todo, index) => (
              <React.Fragment key={todo.id}>
                <Todo
                  key={todo.id}
                  {...todo}
                  deleteTodo={deleteTodo}
                  toggleCompleted={toggleCompleted}
                  addTodo={addTodo}
                  editTodo={editTodo}
                />
                {todosLength !== index + 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      ) : null}
    </>
  );
};

export default TodoList;
