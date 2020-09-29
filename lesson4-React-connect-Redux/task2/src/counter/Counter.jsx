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
// создаем state, который называется  counter равен state.counter из state редьюсера
const mapState = (state) => { return { counter: state.counter } }

//cоздаем методы для работы равны action.creators в action
const mapDispatch = {
  incr: counterActions.increment, //тоже самое incr: store.dispatch(increment())
  decr: counterActions.decrement, //тоже самое decr: store.dispatch(decrement())
  res: counterActions.reset, //тоже самое res: store.dispatch(reset())
};
//передаем все данные через props: counter, incr, decr, res
const connector = connect(mapState, mapDispatch);
export default connector(Counter);
