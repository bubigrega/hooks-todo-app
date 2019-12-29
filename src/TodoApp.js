import React from "react";
import uuid from "uuid/v4";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import useTodoStorage from "./hooks/useTodoStorage";
import useStyles from "./hooks/useStyles";

const styles = {
  paper: {
    minHeight: "100vh"
  },
  appbar: {
    height: "64px"
  }
};

const initialTodos = [
  { id: uuid(), task: "clean kitchen", completed: true },
  { id: uuid(), task: "clean living room", completed: true },
  { id: uuid(), task: "clean beadroom", completed: false }
];

const TodoApp = () => {
  const classes = useStyles(styles);

  const {
    todos,
    toggleCompleted,
    addTodo,
    deleteTodo,
    editTodo
  } = useTodoStorage(initialTodos);

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
            addTodo={addTodo}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
