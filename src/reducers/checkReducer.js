import { FETCH_ITEMS, CHECK_ITEM } from "../actions/types";

const initialState = {
  items: [],
  selectedItem: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case CHECK_ITEM:
      return {
        ...state,
        selectedItem: action.payload
      };
    default:
      return state;
  }
}