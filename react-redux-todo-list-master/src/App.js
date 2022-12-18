import React from "react";
import { Card, CardActions, CardMedia, CardContent } from "@material-ui/core";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Card variant="outlined" className={styles.card}>
        <CardMedia className={styles.cardMedia} image="Todo_BackGround.jpg" />
        <CardContent className={styles.cardContent}>
          <TodoList />
        </CardContent>
        <CardActions>
          <TodoInput />
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
