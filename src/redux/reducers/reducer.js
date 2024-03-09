const INITIAL_STATE = {
  carts: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD TO CART":
      return {
        ...state,
        carts: [...state.carts, action.payload]
      };

    default:
      return state;
  }
};
