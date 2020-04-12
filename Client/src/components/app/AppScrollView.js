import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const AppScrollView = props => (
  <ScrollView
    contentContainerStyle={[styles.scrollView, props.contentContainerStyle]}
    {...props}
  ></ScrollView>
);

export default AppScrollView;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
