import { combineReducers } from "redux";
import shopCart from "./shopCart";
import shop from "./shop";

const rootReducer = combineReducers({
  shopCart,
  shop,
});

export default rootReducer;
