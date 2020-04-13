import React from "react";
import AppText from "../app/AppText";
import AppButton from "../app/AppButton";
import { View } from "react-native";
import { stringifyPrice } from "../utils";

const ProductDetails = (props) => {
  const { route, navigation } = props;
  const { params } = route;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: params.displayName,
    });
  });

  return (
    <View>
      <AppText>Name: {params.displayName}</AppText>
      <AppText>Price: {stringifyPrice(params.price)}</AppText>

      <AppButton
        onPress={() => props.addProductToCart(params)}
        title="Add to cart"
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default ProductDetails;
