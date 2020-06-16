import React from "react";
import { connect } from "react-redux";
import * as userActions from "./users.actions";

const Users = ({ users, deleteUser, createUser }) => {
  const onUserCreate = () => {
    const id = Math.round(Math.random() * 100000);
    const newUser = {
      id,
      name: `User #${id}`,
    };
    createUser(newUser);
  };
  return (
    <div className="users">
      <button className="users__create-btn" onClick={onUserCreate}>
        Create User
      </button>
      <ul className="users__list">
        {users.map((user) => (
          <li className="users__list-item" key={user.id}>
            {user.name}
            <button
              className="users__delete-btn"
              onClick={() => deleteUser(user.id)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.users.usersList,
  };
};
const mapDispatch = {
  createUser: userActions.addUser,
  deleteUser: userActions.deleteUser,
};
const connector = connect(mapState, mapDispatch);
const connectedUsers = connector(Users);

export default connectedUsers;
