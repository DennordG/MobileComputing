const shopCart = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { cartProducts = [] } = state;

      const newCartProducts = Array.from(cartProducts);

      const newProduct = action.payload;
      const existingIndex = newCartProducts.findIndex(
        (p) => p.code == newProduct.code
      );
      if (existingIndex !== -1) {
        newCartProducts[existingIndex].count++;
      } else {
        newProduct.count = 1;
        newCartProducts.push(newProduct);
      }

      return {
        ...state,
        cartProducts: newCartProducts,
      };
    }

    case "CHECKOUT": {
      return { ...state, cartProducts: undefined };
    }

    default: {
      return state;
    }
  }
};

export default shopCart;
