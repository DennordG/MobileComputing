import React from "react";
import AppText from "../appComponents/AppText";
import AppButton from "../appComponents/AppButton";
import AppScrollView from "../appComponents/AppScrollView";
import { StyleSheet } from "react-native";
import { stringifyPrice } from "../utils";

const ShopCart = (props) => {
  if (!props.cartProducts) {
    return (
      <AppText style={{ marginTop: 30, alignSelf: "center" }}>
        The shopping cart is empty
      </AppText>
    );
  }

  const cartProducts = props.cartProducts.map((p) => {
    return (
      <AppText key={p.code}>
        {p.displayName} x{p.count} :{" "}
        {stringifyPrice({
          value: p.price.value * p.count,
          currency: p.price.currency,
        })}
      </AppText>
    );
  });

  return (
    <AppScrollView contentContainerStyle={{ marginTop: 30 }}>
      {cartProducts}
      <AppButton
        title="Checkout"
        onPress={props.checkout}
        style={styles.checkoutBtn}
      />
    </AppScrollView>
  );
};

export default ShopCart;

const styles = StyleSheet.create({
  checkoutBtn: {
    marginTop: 10,
  },
});
