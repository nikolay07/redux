import { ADDUSER, DELETEUSER } from "./users.actions";

//создаем начальное состояние - список пользователь в виде массива
const initialState = {
  usersList: [],
};

//создаем редьюсер, принимающий начальное состояние и екшн

export const usersReducer = (state = initialState, action) => {
  const newUserList = state.usersList;
  //делаем проверку
  switch (action.type) {
    case ADDUSER:
      //если action.type = ADDUSER, вернуть начальное состояние, добавив к нему новые данные
      return {
        ...state,
        usersList: newUserList.concat(action.payload.user),
      };
    //если action.type = DELETEUSER,  вернуть начальное состояние, и отфильтрованный массив пользователей по id
    case DELETEUSER:
      return {
        ...state,
        usersList: newUserList.filter(
          (user) => user.id !== action.payload.id
        ),
      };
    //если action.type нету - вернуть начальное состояние
    default:
      return state;
  }
};
