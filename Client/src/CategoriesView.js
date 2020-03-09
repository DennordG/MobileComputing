import React from "react";
import { StyleSheet } from "react-native";
import { groupBy } from "./utils";
import { ScrollView } from "react-native-gesture-handler";
import ShopBlock from "./ShopBlock";

function getProductsAsync() {
  return fetch("http://localhost:3000/products").then(response => {
    return response.map(p => {
      return {
        price: { value: p.priceValue, currency: p.priceCurrency },
        ...p
      };
    });
  });
}

export default function CategoriesView(props) {
  const allProducts = getProductsAsync();

  const categoryIcons = {
    "Fast food": "food",
    "Pet food": "paw",
    Pets: "dog",
    Fruits: "apple",
    Tools: "toolbox",
    Clothes: "hanger"
  };

  const productsByCategory = groupBy(allProducts, "category");

  const navigateToProductsView = products => {
    props.navigation.navigate({
      name: "ProductsView",
      params: {
        products: products
      }
    });
  };

  const displayItems = Object.keys(productsByCategory).map(category => (
    <ShopBlock
      key={category}
      displayText={category}
      onPress={() => navigateToProductsView(productsByCategory[category])}
      icon={categoryIcons[category]}
    />
  ));

  return (
    <ScrollView
      children={displayItems}
      contentContainerStyle={styles.categoryView}
    />
  );
}

const styles = StyleSheet.create({
  categoryView: {
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
