import React from "react";
import { myContext } from "./my-context";

class Nik extends React.Component {
  render() {
    return (
      <div className="">
        Hello {this.context.fullName.firstName}{" "}
        {this.context.fullName.lastName}
      </div>
    );
  }
}
Nik.contextType = myContext;

export default Nik;

//1.Присваиваем главной компоненте с добавкой .contextType значение контекста - Nik.contextType = myContext;
//2.Используем внутри компоненты данные, полученный из главной компоненты через Provider - this.context
