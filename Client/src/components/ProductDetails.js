import React from "react";
import AppText from "./app/AppText";
import AppButton from "./app/AppButton";
import { View } from "react-native";
import { stringifyPrice } from "./utils";
import { connect } from "react-redux";

function ProductDetails(props) {
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product }),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
