import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const ADD = "ADD",
  DELETE = "DELETE";

const addToDo = createAction(ADD);
const deleteToDo = createAction(DELETE);

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.toString():
      return [{ text: action.payload, id: Date.now(), ...state }];
    case deleteToDo.toString():
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
