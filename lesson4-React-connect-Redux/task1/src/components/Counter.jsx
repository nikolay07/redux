import React from "react";
import { connect } from "react-redux";
//import { increment, decrement, reset } from "../counter.actions";
import * as counterActions from "../counter.actions"; // импорт всех данных в один файл

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
    counter: state,
  };
};
// const mapDispatch = (dispatch) => {
//   return {
//     incr: () => dispatch(increment()),
//     decr: () => dispatch(decrement()),
//     res: () => dispatch(reset()),
//   };
const mapDispatch = {
  incr: counterActions.increment,
  decr: counterActions.decrement,
  res: counterActions.reset,
};

//const connector = connect(mapState, mapDispatch); // HOC High Order Component
export default connect(mapState, mapDispatch)(Counter); // экспортируем обернутый реакт компонент
