import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Clicked: {count} Times</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { count: state.count };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
