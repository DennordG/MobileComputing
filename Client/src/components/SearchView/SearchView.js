import React from "react";
import AppScrollView from "../app/AppScrollView";
import ShopBlock from "../ShopBlock";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class SearchView extends React.Component {
  state = {
    allProducts: this.props.products,
    filteredProducts: this.props.products,
  };

  onSearchInputChange = (filter) => {
    const { allProducts } = this.state;

    const includesRegex = new RegExp(`${filter}`, "i");
    const startsWithRegex = new RegExp(`^${filter}`, "i");

    const filteredProducts = allProducts
      .filter((p) => {
        return includesRegex.test(p.displayName);
      })
      .sort((p1, p2) => {
        const startsWithP1 = +startsWithRegex.test(p1.displayName);
        const startsWithP2 = +startsWithRegex.test(p2.displayName);

        if (startsWithP1 > startsWithP2) {
          return -1;
        }

        if (startsWithP1 < startsWithP2) {
          return 1;
        }

        return 0;
      });

    this.setState({ filteredProducts });
  };

  render() {
    const { filteredProducts } = this.state;

    const itemsToDisplay = filteredProducts.map((p) => (
      <ShopBlock
        key={p.code}
        displayText={p.displayName}
        style={{ height: 80 }}
        onPress={() =>
          this.props.navigation.navigate({
            name: "ProductDetails",
            params: {
              code: p.code,
              displayName: p.displayName,
              price: p.price,
            },
          })
        }
      />
    ));

    return (
      <AppScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View style={styles.searchField}>
          <Icon name="magnify" style={styles.searchIcon} />
          <TextInput
            placeholder="Type here..."
            style={styles.textInput}
            onChangeText={this.onSearchInputChange}
          />
        </View>
        {itemsToDisplay}
      </AppScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchField: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 5,
    backgroundColor: "white",
    height: 40,
    borderWidth: 1,
    borderColor: "yellow",
  },
  searchIcon: { fontSize: 24 },
  textInput: {
    flex: 1,
    fontSize: 24,
    marginLeft: 5,
  },
});

export default SearchView;
