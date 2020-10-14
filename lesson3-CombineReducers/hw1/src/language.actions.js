export const SET_LANGUAGE = "CART/SET_LANGUAGE";

  export const setLanguage = (language) => {
  return {
    // установить язык
    type: SET_LANGUAGE,
    payload: {
      language,
    },
  };
};
