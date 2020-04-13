import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SearchIcon = (props) => (
  <Icon
    name="magnify"
    style={{ fontSize: 30, marginRight: "10px" }}
    onPress={props.onPress}
  />
);

export default SearchIcon;
