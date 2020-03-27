import * as React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  const onBtnClick = () => dispatch(actionCreators.deleteToDo(ownProps.id));
  return { onBtnClick };
}

export default connect(null, mapDispatchToProps)(ToDo);
