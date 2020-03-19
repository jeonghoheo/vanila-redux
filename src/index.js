import { createStore } from "redux";

const plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChnage = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChnage);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

console.log(countStore.getState());
