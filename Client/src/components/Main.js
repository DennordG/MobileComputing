import React from "react";
import { PermissionsAndroid, Modal, View, StyleSheet } from "react-native";
import WifiManager from "react-native-wifi-reborn";
import NavigationTabs from "./NavigationTabs";
import { NavigationContainer } from "@react-navigation/native";
import AppText from "./app/AppText";

export default class Main extends React.Component {
  state = { isWifiOff: false };

  constructor(props) {
    super(props);

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
        setInterval(
          () =>
            WifiManager.connectionStatus((isConnected) =>
              this.setState({ isWifiOff: !isConnected })
            ),
          2000
        );
      }
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Modal
          animationType="fade"
          presentationStyle="overFullScreen"
          visible={this.state.isWifiOff}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <AppText style={styles.modalText}>
                Wi-Fi needs to be turned on for the application to work
                properly. Please turn it on.
              </AppText>
            </View>
          </View>
        </Modal>
        <NavigationTabs />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#007aff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    textAlign: "center",
    color: "white",
  },
});
