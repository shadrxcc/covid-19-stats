import { ActionTypes } from "../constants/action-types";

const setCountry = (countries) => {
  return {
    type: ActionTypes.SET_COUNTRY,
    payload: countries,
  };
};

const selectCountry = (country) => {
  return {
    type: ActionTypes.SELECT_COUNTRY,
    payload: country,
  };
};

export { selectCountry, setCountry};
