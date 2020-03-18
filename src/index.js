import { createStore } from "redux";

const plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  number = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
};

const countStore = createStore(countModifier);
console.log(countStore.getState());
