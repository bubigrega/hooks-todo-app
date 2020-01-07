import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import useInput from "./hooks/useInput";
import { TodoStateContext } from "./contexts/todo-context";

const useStyles = makeStyles({
  root: {
    width: "80%",
    marginLeft: "1rem"
  }
});

const EditTodoForm = ({ id, task, setEditOpen }) => {
  const classes = useStyles();

  const [fieldsTodo] = useInput(task);

  const { editTodo } = useContext(TodoStateContext);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(id, fieldsTodo.value);
    setEditOpen();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        onBlur={handleSubmit}
        autoFocus
        fullWidth
        {...fieldsTodo}
        label="Edit"
        margin="normal"
      />
    </form>
  );
};

export default EditTodoForm;
