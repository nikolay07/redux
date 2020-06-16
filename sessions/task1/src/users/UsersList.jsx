// import React from "react";
// import Filter from "../Filter";
// import User from "./User";
// import { connect } from "react-redux";
// import { filteredUsersSelector } from "./users.selectors";
// import * as usersActions from "./users.actions";

// const UsersList = ({ usersList, setFilterText, filterText }) => {
//     return (
//         <div>
//             <Filter
//                 filterText={filterText}
//                 count={usersList.length}
//                 onChange={setFilterText}
//             />
//             <ul className="users">
//                 {usersList.map((user) => (
//                     <User key={user.id} {...user} />
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const mapState = (state) => {
//     return {
//         usersList: filteredUsersSelector(state),
//         filterText: state.users.filterText,
//     };
// };

// const mapDispatch = {
//     setFilterText: usersActions.setFilterText,
// };

// export default connect(mapState, mapDispatch)(UsersList);

import React, { Component } from "react";
import PropTypes from "prop-types";
import User from "./User";
import Filter from "./Filter";
class UsersList extends Component {
  handleChange = (event) => {
    this.props.setFilterText(event.target.value.toLowerCase());
  };
  render() {
    const { usersToDisplay, filterText } = this.props;
    return (
      <div>
        <Filter
          count={usersToDisplay.length}
          onChange={this.handleChange}
          filterText={filterText}
        />
        <ul className="users">
          {usersToDisplay.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
UsersList.propTypes = {
  usersToDisplay: PropTypes.arrayOf(PropTypes.shape()),
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};
export default UsersList;
