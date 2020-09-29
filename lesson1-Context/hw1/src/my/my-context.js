import React, { createContext } from "react";

export const myName = { firstName: "Nik", lastName: "Abramovych" };
export const myContext = React.createContext();

//1.Создаем переменную с данными для контекста - экспорт
//2.Создаем контекст - новую переменную  и присваиваем ей значение React.createContext() - экспорт
