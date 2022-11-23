import { SET_COUNTRY, SELECT_COUNTRY } from "../constants/action-types";

const setCountry = (countries) => {
  return {
    type: SET_COUNTRY,
    payload: countries,
  };
};

const selectCountry = (country) => {
  return {
    type: SELECT_COUNTRY,
    payload: country,
  };
};

export { selectCountry, setCountry };
