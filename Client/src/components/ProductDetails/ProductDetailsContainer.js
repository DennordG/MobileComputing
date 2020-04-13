import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";
import { addToCart } from "../../actions/shopCart";

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => dispatch(addToCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
