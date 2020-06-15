import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users.actions";

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }

    case DELETE_USER: {
      const newList = state.usersList.filter(
        (user) => user.id !== action.payload.userId
      );
      return {
        ...state,
        usersList: newList,
      };
    }
    case UPDATE_USER: {
      const newList = state.usersList.map((user) => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });
      return {
        ...state,
        usersList: newList,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;

// описывем начальное состояние state в виде списка - массива

//Создаем  Reducer, который будет содавать новый state на основании созданных action creators в users.actions.js. Это всегда чистая функция, которая принимает текуще состояние (state) и action на основании которых будем генерировать новое состояние (state).
//Конструкция switch-case проверяет, какой именно action был сгенерирован где-то в приложении (dispatch).
// Она всегда должна иметь default state;
//импортируем action types;
