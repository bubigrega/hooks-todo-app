import React from "react";
import Divider from "@material-ui/core/Divider";
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
const TodoForm = ({
  id,
  task = "",
  addTodo,
  editOpen,
  setEditOpen,
  editTodo
}) => {
  const classes = useStyles();
  const [fieldsTodo, resetTodo] = useInput(task);

  const handleSubmit = e => {
    e.preventDefault();
    if (editOpen) {
      editTodo(id, fieldsTodo.value);
      setEditOpen();
    } else {
      addTodo(fieldsTodo.value);
      resetTodo();
    }
  };
  return (
    <>
      <Paper className={classes.root}>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            fullWidth
            {...fieldsTodo}
            label={editOpen ? "Edit" : "Add Todo"}
            margin="normal"
          />
        </form>
      </Paper>
      <Divider />
    </>
  );
};

export default TodoForm;
