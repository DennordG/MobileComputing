import { connect } from "react-redux";
import ShopCart from "./ShopCart";

const mapStateToProps = ({ shopCart }) => shopCart;

const mapDispatchToProps = dispatch => {
  return {
    checkout: () => dispatch({ type: "CHECKOUT" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);
