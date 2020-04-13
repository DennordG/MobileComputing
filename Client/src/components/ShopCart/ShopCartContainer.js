import { connect } from "react-redux";
import ShopCart from "./ShopCart";
import { checkout } from "../../actions/shopCart";

const mapStateToProps = ({ shopCart }) => shopCart;

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => dispatch(checkout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);
