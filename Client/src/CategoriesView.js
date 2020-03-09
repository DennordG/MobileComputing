import React from "react";
import { StyleSheet } from "react-native";
import { groupBy } from "./utils";
import { ScrollView } from "react-native-gesture-handler";
import ShopBlock from "./ShopBlock";

const categoryIcons = {
  "Fast food": "food",
  "Pet food": "paw",
  Pets: "dog",
  Fruits: "apple",
  Tools: "toolbox",
  Clothes: "hanger"
};

async function getProductsAsync() {
  try {
    const response = await fetch("http://192.168.100.47:3000/products");
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.log("Looks like there was a problem: \n", error);
  }
}

export default class CategoriesView extends React.Component {
  navigateToProductsView = products => {
    this.props.navigation.navigate({
      name: "ProductsView",
      params: {
        products: products
      }
    });
  };

  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  componentDidMount() {
    getProductsAsync().then(products => this.setState({ products }));
  }

  render() {
    const allProducts = this.state.products;
    if (!allProducts) return null;

    const productsByCategory = groupBy(allProducts, "category");

    const displayItems = Object.keys(productsByCategory).map(category => (
      <ShopBlock
        key={category}
        displayText={category}
        onPress={() =>
          this.navigateToProductsView(productsByCategory[category])
        }
        icon={categoryIcons[category]}
      />
    ));

    return (
      <ScrollView
        children={displayItems}
        contentContainerStyle={styles.categoryView}
      />
    );
  }
}

const styles = StyleSheet.create({
  categoryView: {
    flexGrow: 0,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
