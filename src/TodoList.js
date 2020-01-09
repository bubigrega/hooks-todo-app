import React, { useContext } from "react";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";
import { TodoStateContext } from "./contexts/todo-context";

const TodoList = () => {
  const todos = useContext(TodoStateContext);

  const todosLength = todos.length;

  console.log("render TODO LIST", todos);
  return (
    <>
      {todos.length ? (
        <Paper>
          <List>
            {todos.map((todo, index) => (
              <React.Fragment key={todo.id}>
                <Todo key={todo.id} {...todo} />
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
