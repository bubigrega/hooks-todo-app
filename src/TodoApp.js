import React, { useState } from "react";
import uuid from "uuid/v4";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import TodoList from "./TodoList";

const useStyles = makeStyles({
  paper: {
    height: "100vh"
  }
});

const initialTodos = [
  { id: uuid(), task: "clean kitchen", completed: true },
  { id: uuid(), task: "clean living room", completed: true },
  { id: uuid(), task: "clean beadroom", completed: true }
];

const TodoApp = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState(initialTodos);

  return (
    <Paper className={classes.paper}>
      <AppBar position="sticky" variant="elavation">
        <ToolBar>
          <Typography variant="h5">Todo App</Typography>
        </ToolBar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;
