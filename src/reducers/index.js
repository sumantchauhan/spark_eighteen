import { combineReducers } from "redux";
import checkReducers from "./checkReducer";

export default combineReducers({
  items: checkReducers
});
