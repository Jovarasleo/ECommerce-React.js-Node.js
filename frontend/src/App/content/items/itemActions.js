import axios from "axios";
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "./itemTypes";

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  };
};
export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};
export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  };
};

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest);
    axios
      .get("http://127.0.0.1:4000/items")
      .then((response) => {
        const items = response.data;
        dispatch(fetchItemsSuccess(items));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchItemsFailure(errorMsg));
      });
  };
};
