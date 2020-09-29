import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const cart = { products: [] };

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    // добавить продукт
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };
    }
    // удалить продукт
    case REMOVE_PRODUCT: {
      const newList = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: newList,
      };
    }
    default:
      return state;
  }
};
