import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    height: "100vh"
  }
});

function App() {
  const classes = useStyles();

  return <Paper className={classes.paper}>TODOS</Paper>;
}

export default App;
