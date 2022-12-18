import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import styles from "../styles/TodoInput.module.css";
import { AddCircle } from "@material-ui/icons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../actions";

function TodoInput(props) {
  const [todoTextInput, setTodoTextInput] = useState("");

  let updateTodoList = () => {
    props.addTodo(todoTextInput);
    setTodoTextInput("");
  };

  return (
    <div className={styles.todoInput}>
      <TextField
        label="What do you need to do today?"
        variant="outlined"
        value={todoTextInput}
        onChange={(event) => setTodoTextInput(event.target.value)}
        fullWidth
      />
      <div className={styles.icon}>
        <AddCircle
          style={{ color: "#3F51B5", fontSize: 50 }}
          onClick={updateTodoList}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(TodoInput);
