import React, { memo, useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckBox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

import EditTodoForm from "./EditTodoForm";
import useToggle from "./hooks/useToggle";
import { TodoStateContext } from "./contexts/todo-context";

const Todo = ({ task, completed, id }) => {
  const [editOpen, setEditOpen] = useToggle(false);

  const { deleteTodo, toggleCompleted } = useContext(TodoStateContext);

  const handleDelete = () => {
    deleteTodo(id);
  };
  const handleCompleted = () => {
    toggleCompleted(id);
  };

  return (
    <ListItem style={{ height: "64px" }}>
      {editOpen ? (
        <EditTodoForm
          task={task}
          id={id}
          setEditOpen={setEditOpen}
          editOpen={editOpen}
        />
      ) : (
        <>
          <CheckBox checked={completed} onChange={handleCompleted} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={handleDelete} aria-label="delete">
              <Delete />
            </IconButton>
            {!completed && (
              <IconButton onClick={() => setEditOpen()} aria-label="edit">
                <Edit />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default memo(Todo);
