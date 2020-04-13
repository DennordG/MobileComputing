import React from "react";
import AppText from "./app/AppText";
import { View } from "react-native";

export default function About(props) {
  return (
    <View style={{ marginTop: 30 }}>
      <AppText style={{ alignSelf: "center" }}>
        Simple react-native project for Mobile Computing
      </AppText>
    </View>
  );
}
