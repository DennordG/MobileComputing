import React from "react";
import { ActivityIndicator } from "react-native";
import { groupBy } from "./utils";
import ShopBlock from "./ShopBlock";
import AppScrollView from "./app/AppScrollView";

const categoryIcons = {
  "Fast food": "food",
  "Pet food": "paw",
  Pets: "dog",
  Fruits: "apple",
  Tools: "toolbox",
  Clothes: "hanger",
  Hygiene: "toilet",
};

const getProductsAsync = async () => {
  try {
    const response = await fetch("http://192.168.100.50:3000/products");
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.log("Looks like there was a problem: \n", error);
  }
};

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

export default class CategoriesView extends React.Component {
  navigateToProductsView = (products) => {
    this.props.navigation.navigate({
      name: "ProductsView",
      params: {
        products: products,
      },
    });
  };

  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  componentDidMount() {
    getProductsAsync().then((products) =>
      this.setState({ products: preProcessProducts(products) })
    );
  }

  render() {
    const allProducts = this.state.products;
    if (!allProducts)
      return (
        <ActivityIndicator
          style={{ width: "100%", height: "100%" }}
          size="large"
        />
      );

    const productsByCategory = groupBy(allProducts, "category");

    const displayItems = Object.keys(productsByCategory).map((category) => (
      <ShopBlock
        key={category}
        displayText={category}
        onPress={() =>
          this.navigateToProductsView(productsByCategory[category])
        }
        icon={categoryIcons[category]}
      />
    ));

    return <AppScrollView children={displayItems} />;
  }
}
