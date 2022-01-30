import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import itemReducer from "../content/items/itemReducer";

const rootReducer = combineReducers({
  items: itemReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
