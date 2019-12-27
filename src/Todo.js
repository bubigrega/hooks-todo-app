import React, { memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CheckBox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

const Todo = ({ task, completed, id, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <>
      <ListItem>
        <CheckBox checked={completed} />
        <ListItemText
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick={handleDeleteClick} aria-label="delete">
            <Delete />
          </IconButton>
          <IconButton onClick={handleDeleteClick} aria-label="edit">
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default memo(Todo);
