import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import ShopBlock from "./ShopBlock";

export default function ProductsView(props) {
  const { route, navigation } = props;
  const { params } = route;

  const category = params.products[0].category;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: category
    });
  });

  const navigateToProductDetails = product => {
    props.navigation.navigate({
      key: "ProductDetails",
      name: "ProductDetails",
      params: {
        displayName: product.displayName,
        price: product.price
      }
    });
  };

  const displayProducts = params.products.map(p => (
    <ShopBlock
      key={p.code}
      displayText={p.displayName}
      onPress={() => navigateToProductDetails(p)}
      style={{ flexBasis: "50%", flexGrow: 0 }}
    />
  ));

  return (
    <ScrollView
      children={displayProducts}
      contentContainerStyle={styles.productsView}
    />
  );
}

const styles = StyleSheet.create({
  productsView: {
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
