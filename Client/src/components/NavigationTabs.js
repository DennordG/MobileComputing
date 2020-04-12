import React from "react";
import Shop from "./Shop";
import About from "./About";
import ShopCart from "./ShopCart/";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function NavigationTabs(props) {
  return (
    <Tab.Navigator initialRouteName="Shop">
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color, size = 18 }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size = 18 }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="ShopCart"
        component={ShopCart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size = 18 }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
