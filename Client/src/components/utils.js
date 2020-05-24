import React from "react";
import { Dimensions } from "react-native";

export const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const stringifyPrice = ({ value, currency }) =>
  String(value).concat(getCurrencySymbol(currency));

const getCurrencySymbol = (currency) => {
  switch (currency) {
    case "EUR":
      return "€";

    case "USD":
      return "$";

    default:
      return "lei";
  }
};

export const withOrientation = (Component) => {
  return class extends React.Component {
    isPortrait = () => {
      const dim = Dimensions.get("screen");
      return dim.height >= dim.width;
    };

    constructor(props) {
      super(props);

      this.state = {
        orientation: this.isPortrait() ? "portrait" : "landscape",
      };

      Dimensions.addEventListener("change", () => {
        this.setState({
          orientation: this.isPortrait() ? "portrait" : "landscape",
        });
      });
    }

    render() {
      return <Component orientation={this.state.orientation} {...this.props} />;
    }
  };
};
