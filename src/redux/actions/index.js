import { SET_COUNTRY, SELECT_COUNTRY, SET_WORLD } from "../constants/action-types";

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

const setWorld = (continent) => {
  return {
    type: SET_WORLD,
    payload: continent,
  };
};

export { selectCountry, setCountry, setWorld };
