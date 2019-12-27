import React, { memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

const Todo = ({ task, completed, id, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <>
      <ListItem>
        <ListItemText>
          {task}{" "}
          <IconButton onClick={handleDeleteClick}>
            <Delete />
          </IconButton>
        </ListItemText>
      </ListItem>
      <Divider />
    </>
  );
};

export default memo(Todo);
