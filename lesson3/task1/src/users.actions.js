export const ADD_USER = "USERS/ADD_USER";
export const DELETE_USER = "USERS/DELETE_USER";
export const UPDATE_USER = "USERS/UPDATE_USER";

//создаем action types (creators)
export const addUser = (userData) => {
  return {
    type: ADD_USER, // обязательное поле
    payload: {
      // дополнительная информация
      userData,
    },
  };
};
export const deleteUser = (userId) => {
  //нужно найти только пользователя по id
  return {
    type: DELETE_USER,
    payload: {
      userId,
    },
  };
};

export const updateUser = (userId, userData) => {
  //какой пользователь id и какие данные обновить data
  return {
    type: UPDATE_USER,
    payload: {
      userId,
      userData,
    },
  };
};
