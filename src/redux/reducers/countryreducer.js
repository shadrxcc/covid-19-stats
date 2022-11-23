//import { setCountry, selectCountry } from "../actions";
import { SET_COUNTRY } from "../constants/action-types";

const initialState = [];

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return state;
    default:
      return state;
  }
};

export default countryReducer;
