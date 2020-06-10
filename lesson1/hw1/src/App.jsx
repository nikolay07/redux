import React, { Component } from "react";
import Header from "./Header";
import { UserContext, user } from "./user-context";

class App extends Component {
  state = {
    userData: user,
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userData}>
        <Header />
      </UserContext.Provider>
    );
  }
}

export default App;
