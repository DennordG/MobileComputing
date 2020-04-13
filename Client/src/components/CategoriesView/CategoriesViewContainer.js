import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CategoriesView from "./CategoriesView";
import { fetchProducts } from "../../actions/shop";

const mapStateToProps = ({ shop }) => {
  return {
    loading: shop.loading,
    products: shop.products,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesView);
