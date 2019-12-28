import React, { memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckBox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

import TodoForm from "./TodoForm";
import useToggle from "./hooks/useToggle";

const Todo = ({
  task,
  completed,
  id,
  deleteTodo,
  toggleCompleted,
  editTodo
}) => {
  const [editOpen, setEditOpen] = useToggle(false);

  const handleDelete = () => {
    deleteTodo(id);
  };
  const handleCompleted = () => {
    toggleCompleted(id);
  };

  return (
    <>
      {editOpen ? (
        <TodoForm
          task={task}
          id={id}
          editTodo={editTodo}
          setEditOpen={setEditOpen}
          editOpen={editOpen}
        />
      ) : (
        <ListItem>
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
        </ListItem>
      )}
    </>
  );
};

export default memo(Todo);
