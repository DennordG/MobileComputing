import React from "react";
import CategoriesView from "./CategoriesView";
import ProductsView from "./ProductsView";
import ProductDetails from "./ProductDetails";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Shop(props) {
  return (
    <Stack.Navigator initialRouteName="CategoriesView" headerMode="screen">
      <Stack.Screen
        name="CategoriesView"
        component={CategoriesView}
        options={{
          title: "Categories"
        }}
      />
      <Stack.Screen name="ProductsView" component={ProductsView} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
