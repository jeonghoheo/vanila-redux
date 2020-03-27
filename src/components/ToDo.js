import * as React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>Delete</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  const onBtnClick = () => dispatch(actionCreators.deleteToDo(ownProps.id));
  return { onBtnClick };
}

export default connect(null, mapDispatchToProps)(ToDo);