const INITIAL_STATE = {
  carts: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD TO CART":
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if(itemIndex >= 0){
        state.carts[itemIndex].qnty ++ ;
      }else{
        const temp = {...action.payload,qnty:1}
        return {
          ...state,
          carts: [...state.carts, temp]
        };
      }
      

      case "DELETE FROM CART":
        const data = state.carts.filter((element) => element.id !== action.payload )
        return {
          ...state,
          carts: data
        }
        
      case "DECREMENT BY 1":
        const itemIndexDecr = state.carts.findIndex((item) => item.id === action.payload.id);
        if(state.carts[itemIndexDecr].qnty >= 1){
          const decrBy1 = state.carts[itemIndexDecr].qnty -- ;
          return {
            ...state, carts:[...state.carts]
          }
        }else if(state.carts[itemIndexDecr].qnty === 1){
          const data = state.carts.filter((element) => element.id !== action.payload );
          return {
            ...state,
            carts: data
          }
          
        }

    default:
      return state;
  }
};
