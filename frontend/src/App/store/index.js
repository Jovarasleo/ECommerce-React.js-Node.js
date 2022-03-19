import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import content from "../content";

const rootReducer = combineReducers({
  content: content.itemReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
