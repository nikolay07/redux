import React from "react";
import { connect } from "react-redux";
import * as userActions from "./users.actions";

class Users extends React.Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 100000);
    const newUser = {
      id,
      name: `User #${id}`,
    };
    this.props.createUser(newUser);
  };
  render() {
    const { users, deleteUser } = this.props;
    return (
      <div className="users">
        <button
          className="users__create-btn"
          onClick={this.onUserCreate}
        >
          Create User
        </button>
        <ul className="users__list">
          {users.map((user) => (
            <li className="users__list-item" key={user.id}>
              {user.name}
              <buton
                className="users__delete-btn"
                onClick={() => deleteUser(user.id)}
              >
                +
              </buton>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
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
