import { fetchData, createApiAction } from "./utils";

const preProcessProducts = (products) =>
  products.map((p) => {
    return {
      category: p.Category,
      code: p.Code,
      displayName: p.DisplayName,
      price: {
        value: p.PriceValue,
        currency: p.PriceCurrency,
      },
    };
  });

export const fetchProducts = () =>
  fetchData(
    createApiAction("FETCH_PRODUCTS", {
      url: "http://192.168.100.52:3000/products",
      processOnSuccess: preProcessProducts,
    })
  );
