import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";

const useStyles = makeStyles({
  paper: {
    height: "100vh"
  },
  appbar: {
    height: "64px"
  }
});

const initialTodos = [
  { id: uuid(), task: "clean kitchen", completed: true },
  { id: uuid(), task: "clean living room", completed: true },
  { id: uuid(), task: "clean beadroom", completed: true }
];

const TodoApp = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || initialTodos
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSave = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = id => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <Paper className={classes.paper}>
      <AppBar position="sticky" variant="elevation" className={classes.appbar}>
        <ToolBar>
          <Typography variant="h5">React Hooks Todo App</Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} sm={9} md={7} lg={5}>
          <TodoList
            todos={todos}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
