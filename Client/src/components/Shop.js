import React from "react";
import CategoriesView from "./CategoriesView/";
import ProductsView from "./ProductsView";
import ProductDetails from "./ProductDetails/";
import SearchView from "./SearchView/";
import SearchIcon from "./SearchIcon";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Shop(props) {
  return (
    <Stack.Navigator initialRouteName="CategoriesView" headerMode="screen">
      <Stack.Screen
        name="CategoriesView"
        component={CategoriesView}
        options={({ navigation }) => ({
          title: "Categories",
          headerRight: () => (
            <SearchIcon onPress={() => navigation.push("SearchView")} />
          ),
        })}
      />
      <Stack.Screen
        name="SearchView"
        component={SearchView}
        options={{
          title: "Search",
        }}
      />
      <Stack.Screen name="ProductsView" component={ProductsView} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
