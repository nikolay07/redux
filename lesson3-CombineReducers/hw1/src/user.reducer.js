import { SET_USER, REMOVE_USER } from "./user.actions";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    //добавить пользователя
    case SET_USER: {
      return action.payload.userData;
    }
    //удалить пользователя
    case REMOVE_USER: {
      return null;
    }

    default:
      return state;
  }
};

// описывем начальное состояние state в виде списка - массива

//Создаем  Reducer, который будет содавать новый state на основании созданных action creators в users.actions.js. Это всегда чистая функция, которая принимает текуще состояние (state) и action на основании которых будем генерировать новое состояние (state).
//Конструкция switch-case проверяет, какой именно action был сгенерирован где-то в приложении (dispatch).
// Она всегда должна иметь default state;
//импортируем action types;
