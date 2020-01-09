import React from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useStyles from "./hooks/useStyles";
import { TodoStateProvider } from "./contexts/todo-context";

const styles = {
  paper: {
    minHeight: "100vh"
  },
  appbar: {
    height: "64px"
  }
};

const TodoApp = () => {
  const classes = useStyles(styles);

  return (
    <Paper className={classes.paper}>
      <AppBar position="sticky" variant="elevation" className={classes.appbar}>
        <ToolBar>
          <Typography variant="h5">React Hooks Todo App</Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={11} sm={9} md={7} lg={5}>
          <TodoStateProvider>
            <TodoForm />
            <TodoList />
          </TodoStateProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
