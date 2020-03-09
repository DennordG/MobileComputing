import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

export default class AppButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.defaultButtonStyle, this.props.style]}
      >
        <AppText style={[styles.defaultTextStyle, this.props.textStyle]}>
          {this.props.title.toUpperCase()}
        </AppText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultButtonStyle: {
    backgroundColor: "#3a51bf",
    height: 35,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  defaultTextStyle: {
    fontSize: 15,
    color: "white"
  }
});
