import React from "react";
import NavigationTabs from "./NavigationTabs";
import { NavigationContainer } from "@react-navigation/native";

export default class Main extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    );
  }
}
