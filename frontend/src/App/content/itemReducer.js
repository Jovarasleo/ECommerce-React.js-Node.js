import * as types from "./itemTypes";

const initialState = {
  loading: false,
  items: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ITEMS_REQUEST:
      console.log("request reducer");
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ITEMS_SUCCESS:
      console.log("success reducer", action.payload);
      return {
        loading: false,
        items: action.payload,
        error: "",
      };
    case types.FETCH_ITEMS_FAILURE:
      console.log("failure reducer");
      return {
        loading: false,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
