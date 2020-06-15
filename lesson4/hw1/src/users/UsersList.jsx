import React, { Component } from "react";
import Pagination from "./Pagination";
import User from "./User";
import { connect } from "react-redux";
import * as paginationActions from "./user.actions";

const UserList = ({
  users,
  goNext,
  goPrev,
  currentPage,
  itemsPerPage,
}) => {
  const displayUsers = users.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + 3
  );
  const userList = displayUsers.map((user) => (
    <User key={user.id} {...user} />
  ));
  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        totalItems={users.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">{userList}</ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.usersList,
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
  };
};

const mapDispatch = {
  goNext: paginationActions.goNext,
  goPrev: paginationActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

export default connector(UserList);
