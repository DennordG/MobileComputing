import React from "react";
import ShopBlock from "./ShopBlock";
import AppScrollView from "./app/AppScrollView";
import { withOrientation } from "./utils";

function ProductsView(props) {
  const { route, navigation } = props;
  const { params } = route;

  const category = params.products[0].category;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: category,
    });
  });

  const navigateToProductDetails = (product) => {
    props.navigation.navigate({
      key: "ProductDetails",
      name: "ProductDetails",
      params: {
        code: product.code,
        displayName: product.displayName,
        price: product.price,
      },
    });
  };

  const displayProducts = params.products.map((p) => (
    <ShopBlock
      key={p.code}
      displayText={p.displayName}
      onPress={() => navigateToProductDetails(p)}
    />
  ));

  return <AppScrollView children={displayProducts} />;
}

export default withOrientation(ProductsView);
