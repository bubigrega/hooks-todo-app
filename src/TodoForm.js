import React from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useInput from "./hooks/useInput";
import uuid from "uuid/v4";

const TodoForm = ({ handleSave }) => {
  const [fieldsTodo, resetTodo] = useInput("", "New Todo");

  const handleClick = () => {
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
      <ListItem>
        <TextField {...fieldsTodo} />
        <Button onClick={handleClick}>save</Button>
      </ListItem>
      <Divider />
    </>
  );
};

export default TodoForm;
