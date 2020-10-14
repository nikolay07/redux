import React, { Component } from "react";
import User from "./User";
import Filter from "../Filter";
import { userSelector } from "./user.selectors";
import { onChange } from "./user.actions";
import { connect } from "react-redux";

const UserList = ({ users, onChange, text }) => {
  const userList = users.map((user) => <User key={user.id} {...user} />);
  return (
    <div>
      <Filter count={users.length} onChange={onChange} text={text} />
      <ul className="users">{userList}</ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: userSelector(state),
    text: state.users.filterText,
  };
};

const mapDispatch = {
  onChange: onChange,
};

export default connect(mapState, mapDispatch)(UserList);
