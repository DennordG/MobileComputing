export const checkout = () => {
  return { type: "CHECKOUT" };
};

export const addToCart = (newItem) => {
  return { type: "ADD_TO_CART", payload: newItem };
};
