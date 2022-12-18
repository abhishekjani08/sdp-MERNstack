import React from "react";
import { Checkbox } from "@material-ui/core";
import { AssignmentTurnedIn, Delete } from "@material-ui/icons";
import styles from "../styles/TodoList.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTodo, toogleTodo } from "../actions";

function TodoList(props) {
  let deleteSelectedTodo = (id) => {
    props.deleteTodo(id);
  };

  let toggleSelectedTodo = (id) => {
    props.toogleTodo(id);
  };

  return (
    <div className={styles.todoList}>
      {props.todos && props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <div className={styles.todo}>
            <div className={styles.todoContent}>
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleSelectedTodo(todo.id)}
                color="primary"
              />
              {todo.completed ? (
                <font size="3">
                  <s>{todo.content}</s>
                </font>
              ) : (
                <font size="3">{todo.content}</font>
              )}
              <Delete
                style={{ color: "#3F51B5", fontSize: 30 }}
                onClick={() => deleteSelectedTodo(todo.id)}
              />
            </div>
          </div>
        ))
      ) : (
        <div className={styles.todo}>
          <div className={styles.emptyTodo}>
            <AssignmentTurnedIn
              style={{ color: "#3F51B5", fontSize: 30, marginRight: "1vw" }}
            />
            <font size="3">Tada!!! You Are All Caught Up For The Day.</font>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteTodo,
      toogleTodo,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
