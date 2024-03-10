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

      case "DELETE FROM CART":
        const data = state.carts.filter((element) => element.id !== action.payload )
        return {
          ...state,
          carts: data
        }

    default:
      return state;
  }
};
