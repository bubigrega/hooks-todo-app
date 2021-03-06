import React from "react";
import TextField from "@material-ui/core/TextField";
import useInput from "./hooks/useInput";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "0 1.5rem",
    margin: "1rem 0"
  }
});
const TodoForm = ({ addTodo }) => {
  const classes = useStyles();
  const [fieldsTodo, resetTodo] = useInput("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(fieldsTodo.value);
    resetTodo();
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth {...fieldsTodo} label="Add Todo" margin="normal" />
      </form>
    </Paper>
  );
};

export default TodoForm;
