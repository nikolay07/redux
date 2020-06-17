import React, { useState } from "react";
import UsersList from "./users/UsersList";
import { connect } from "react-redux";
import * as usersActions from "./users/users.actions";

const App = ({ usersList, filterText, setFilterText }) => {
  //const [filterText, setFilterText] = useState("");
  const usersToDisplay = usersList.filter((user) =>
    user.name.toLowerCase().includes(filterText)
  );
  return (
    <UsersList
      usersToDisplay={usersToDisplay}
      filterText={filterText}
      setFilterText={setFilterText}
    />
  );
};
const mapState = (state) => {
  return {
    usersList: state.users.usersList,
    filterText: state.users.filterText,
  };
};
const mapDispatch = {
  setFilterText: usersActions.setFilterText,
};
export default connect(mapState, mapDispatch)(App);
