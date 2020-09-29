import React, { Component } from "react";
import Header from "./Header";
import { UserContext, user } from "./user-context";
import Nik from "./my/Nik";
import { myContext, myName } from "./my/my-context";

class App extends Component {
  state = {
    userData: user,
    fullName: myName,
  };

  render() {
    return (
      <>
        <UserContext.Provider value={this.state}>
          <Header />
        </UserContext.Provider>
        <myContext.Provider value={this.state}>
          <Nik />
        </myContext.Provider>
      </>
    );
  }
}

export default App;

//1.Передаем в state данные для контекста (myName) -state = {fullName: myName};
// 2.Заворачиваем нужную компоненту в Provider поставив перед ним контекст(myContext) - myContext.Provider.
//3. В Provider передаем данные из state - value={this.state}
