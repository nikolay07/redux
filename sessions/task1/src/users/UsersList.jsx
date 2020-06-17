import React from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";
import User from "./User";
import Filter from "../Filter";

const UsersList = ({ usersList, filterText, setFilterText }) => {
  const onChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };
  const usersToDisplay = usersList.filter((user) =>
    user.name.toLowerCase().includes(filterText)
  );
  return (
    <div>
      <Filter
        count={usersToDisplay.length}
        onChange={onChange}
        filterText={filterText}
      />
      <ul className="users">
        {usersToDisplay.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    filterText: state.users.filterText,
    usersList: state.users.usersList,
  };
};
const mapDispatch = {
  setFilterText: usersActions.setFilterText,
};
export default connect(mapState, mapDispatch)(UsersList);
