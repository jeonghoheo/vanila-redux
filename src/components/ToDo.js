import * as React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  const onBtnClick = () => dispatch(remove(ownProps.id));
  return { onBtnClick };
}

export default connect(null, mapDispatchToProps)(ToDo);
