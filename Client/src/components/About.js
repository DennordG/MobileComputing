import React from "react";
import AppText from "./app/AppText";
import { View, Image, StyleSheet } from "react-native";
import AppButton from "./app/AppButton";
import { RNCamera } from "react-native-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class About extends React.Component {
  state = { cameraOn: false };

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ imageData: data, cameraOn: false });
    }
  };

  openCamera = () => {
    this.setState({ cameraOn: true });
  };

  renderCamera = () => {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          captureAudio={false}
        >
          <View
            style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
          >
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
            >
              <AppText style={{ fontSize: 14 }}> SNAP </AppText>
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  };

  render() {
    if (this.state.cameraOn) {
      return this.renderCamera();
    }

    return (
      <View
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText style={{ alignSelf: "center" }}>
          Simple react-native project for Mobile Computing
        </AppText>

        <Image style={styles.image} source={this.state.imageData} />

        <AppButton
          style={{ marginTop: 30 }}
          title="Change photo..."
          onPress={this.openCamera}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "center",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
  image: {
    marginTop: 30,
    width: 200,
    height: 300,
    borderWidth: 1,
    borderColor: "blue",
  },
});
