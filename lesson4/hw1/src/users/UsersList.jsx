import React from "react";
import User from "./User";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { goNextPage, goPrevPage } from "./users.actions";

const UsersList = ({ usersList, currentPage, goNextPage, goPrevPage }) => {
  return (
    <div>
      <Pagination
        goPrevPage={goPrevPage}
        goNextPage={goNextPage}
        currentPage={currentPage}
        usersListLength={usersList.length}
      />
      <ul className="users">
        {usersList.slice(currentPage * 3, currentPage * 3 + 4).map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = ({ usersList, currentPage }) => {
  return {
    usersList,
    currentPage,
  };
};

const mapDispatch = {
  goNextPage,
  goPrevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
