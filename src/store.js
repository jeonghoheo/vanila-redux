import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = [];
const ADD = "ADD",
  DELETE = "DELETE";

const addToDo = createAction(ADD);
const deleteToDo = createAction(DELETE);

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.toString():
//       return [{ text: action.payload, id: Date.now(), ...state }];
//     case deleteToDo.toString():
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer(initialState, {
  addToDo: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  deleteToDo: (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload);
  },
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
