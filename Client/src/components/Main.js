import React from "react";
import { PermissionsAndroid, ToastAndroid } from "react-native";
import WifiManager from "react-native-wifi-reborn";
import NavigationTabs from "./NavigationTabs";
import { NavigationContainer } from "@react-navigation/native";

PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  {
    title: "Location permission is required for WiFi connections",
    message:
      "This app needs location permission as this is required  " +
      "to scan for wifi networks.",
    buttonNegative: "DENY",
    buttonPositive: "ALLOW",
  }
).then((granted) => {
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    WifiManager.isEnabled((isEnabled) => {
      if (!isEnabled) {
        ToastAndroid.showWithGravity(
          "You are not connected to any Wi-Fi.",
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
      }
    });
  }
});

export default class Main extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    );
  }
}
