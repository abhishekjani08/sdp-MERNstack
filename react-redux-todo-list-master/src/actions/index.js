import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actionTypes";

let todoIndex = 0;

export const addTodo = (todoText) => ({
  type: ADD_TODO,
  id: todoIndex++,
  content: todoText,
  completed: false,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id: id,
});

export const toogleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id,
});
