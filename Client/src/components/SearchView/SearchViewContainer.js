import { connect } from "react-redux";
import SearchView from "./SearchView";

const mapStateToProps = ({ shop }) => {
  return {
    products: shop.products,
  };
};

export default connect(mapStateToProps)(SearchView);
