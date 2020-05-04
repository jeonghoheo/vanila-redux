import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [];

const reducers = {
  add: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
};

const toDos = createSlice({
  name: "toDoReducer",
  initialState,
  reducers,
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
