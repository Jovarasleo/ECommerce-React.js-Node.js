import * as types from "./itemTypes";
import * as selectors from "./itemSelectors";
import fetchAPI from "../fetchAPI";

export const getItems = () => async (dispatch) => {
  console.log("getitems");
  dispatch({ type: types.FETCH_ITEMS_REQUEST, payload: false });
  const response = await fetchAPI.fetchItems();
  const payload = await response.json();
  if (response.status === 200) {
    dispatch({ type: types.FETCH_ITEMS_SUCCESS, payload: payload });
  }
};
