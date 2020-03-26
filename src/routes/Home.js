import * as React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = React.useState("");
  function onChange(event) {
    setText(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    setText("");
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  const addToDo = text => dispatch(actionCreators.addToDo(text));
  return {
    addToDo
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
