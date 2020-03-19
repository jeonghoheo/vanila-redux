import { createStore } from "redux";

const ADD = "ADD",
  MINUS = "MINUS";

const plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChnage = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChnage);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());
