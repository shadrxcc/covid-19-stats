import { combineReducers } from "@reduxjs/toolkit";
import worldReducer from "./countryreducer";


const rootReducer = combineReducers({
  allCountries: worldReducer,
});

export default rootReducer;
