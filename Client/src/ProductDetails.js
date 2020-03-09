import React from "react";
import AppText from "./AppText";
import { View } from "react-native";
import { stringifyPrice } from "./utils";

export default function ProductDetails(props) {
  const { route, navigation } = props;
  const { params } = route;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: params.displayName
    });
  });

  return (
    <View>
      <AppText>Name: {params.displayName}</AppText>
      <AppText>Price: {stringifyPrice(params.price)}</AppText>
    </View>
  );
}
