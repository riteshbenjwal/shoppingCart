import initialState from "./initialState";
import * as actionTypes from "./actions";

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id == action.payload.id
      );
      const inCart = state.cart.find((product) =>
        product.id == action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) =>
              product.id == action.payload.id
                ? {
                    ...product,
                    qty: product.qty + 1,
                  }
                : product
            )
          : [...state.cart, { ...item, qty: 1 }],
      };


      case actionTypes.LOAD_CURRENT_ITEM:
          return{
              ...state,
              currentItem: action.payload.item
          }


  }

  return state;
};

export default shopReducer;
