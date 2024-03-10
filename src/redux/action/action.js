export const ADD_TO_CART = (item) => {
  return {
    type: "ADD TO CART",
    payload: item
  };
};

export const DELETE_FROM_CART = (id) => {
  return {
    type: "DELETE FROM CART",
    payload: id
  };
};