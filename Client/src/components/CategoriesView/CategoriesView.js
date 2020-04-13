import React from "react";
import { ActivityIndicator } from "react-native";
import { groupBy } from "../utils";
import ShopBlock from "../ShopBlock";
import AppScrollView from "../app/AppScrollView";

const categoryIcons = {
  "Fast food": "food",
  "Pet food": "paw",
  Pets: "dog",
  Fruits: "apple",
  Tools: "toolbox",
  Clothes: "hanger",
  Hygiene: "toilet",
};

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
    this.props.fetchProducts();
  }

  render() {
    const { products, loading } = this.props;
    if (loading)
      return (
        <ActivityIndicator
          style={{ width: "100%", height: "100%" }}
          size="large"
        />
      );

    if (!products) {
      return null;
    }

    const productsByCategory = groupBy(products, "category");

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
