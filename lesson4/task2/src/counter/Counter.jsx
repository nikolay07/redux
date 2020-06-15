import React from "react";
import { connect } from "react-redux";
import * as counterActions from "./counter.actions";

const Counter = ({ counter, incr, decr, res }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decr}>
        -
      </button>
      <span className="counter__value" onClick={res}>
        {counter}
      </span>
      <button className="counter__button" onClick={incr}>
        +
      </button>
    </div>
  );
};
const mapState = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatch = {
  incr: counterActions.increment,
  decr: counterActions.decrement,
  res: counterActions.reset,
};

const connector = connect(mapState, mapDispatch);
export default connector(Counter);
