import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AppText(props) {
  return <Text {...props} style={[styles.defaultTextStyle, props.style]} />;
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    //fontFamily: "monospace",
    fontSize: 16,
    color: "#4c4c4c"
  }
});
