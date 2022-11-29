import { combineReducers } from "@reduxjs/toolkit";
import countryReducer, { selectedcountryReducer } from "./countryreducer";


const rootReducer = combineReducers({
  allCountries: countryReducer,
  country: selectedcountryReducer,
});

export default rootReducer;
