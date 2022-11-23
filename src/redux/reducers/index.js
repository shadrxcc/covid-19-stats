import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "./countryreducer";

const rootReducer = combineReducers({
  allCountries: countryReducer,
});

export default rootReducer;
