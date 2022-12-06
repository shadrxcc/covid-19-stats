import { ActionTypes } from "../constants/action-types";

const initialState = {
  countries: [],
};

const countryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COUNTRY:
      return { ...state, countries: payload };
    default:
      return state;
  }
};
export default countryReducer;

export const selectedcountryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_COUNTRY:
      return { ...state, ...payload };
    default:
      return state;
  }
};
