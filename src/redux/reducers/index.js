import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "./countryreducer";

const reducers = combineReducers({
    allCountries: countryReducer,
})