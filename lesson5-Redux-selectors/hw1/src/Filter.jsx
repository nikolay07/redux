import React from "react";

const Filter = ({ count, onChange, text }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={text} onChange={onChange} />
    </div>
  );
};

export default Filter;
