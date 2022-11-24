//import { setCountry, selectCountry } from "../actions";
import { SET_WORLD } from "../constants/action-types";

const initialState = [];

const worldReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORLD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default worldReducer;
