import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./app/AppText";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ShopBlock(props) {
  return (
    <View style={[styles.block, props.style]}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <View style={styles.innerView}>
          <AppText style={{ fontSize: 22 }}>{props.displayText}</AppText>
          {props.icon ? (
            <Icon name={props.icon} size={30} style={{ marginLeft: 20 }} />
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexGrow: 1,
    flexBasis: "100%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "orange",
    height: 120,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
