const initialState = {
    history: [],
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
  
          history: state.history.concat("+1"),
        };
      case DECREMENT:
        return {
          ...state,
  
          history: state.history.concat("-1"),
        };
      case RESET:
        return {
          ...state,
  
          history: [],
        };
      default:
        return state;
    }
  };