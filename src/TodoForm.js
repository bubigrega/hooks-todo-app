import React from "react";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import useInput from "./hooks/useInput";
import uuid from "uuid/v4";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "0 1.5rem"
  }
});
const TodoForm = ({ handleSave }) => {
  const classes = useStyles();
  const [fieldsTodo, resetTodo] = useInput("", "Add New Todo");

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      task: fieldsTodo.value,
      completed: false
    };
    handleSave(newTodo);
    resetTodo();
  };
  return (
    <>
      <Paper className={classes.root}>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth {...fieldsTodo} margin="normal" />
        </form>
      </Paper>
      <Divider />
    </>
  );
};

export default TodoForm;
