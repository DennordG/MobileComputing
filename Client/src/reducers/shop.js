const shop = (state = {}, action) => {
  const { payload } = action;

  switch (action.type) {
    case "FETCH_PRODUCTS.PENDING": {
      return {
        ...state,
        loading: true,
      };
    }

    case "FETCH_PRODUCTS.SUCCESS": {
      return {
        ...state,
        products: payload,
        loading: false,
      };
    }

    case "FETCH_PRODUCTS.SUCCESS": {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default shop;
