import {combineReducers, configureStore} from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";

const rootReducer = combineReducers({
  common: commonSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

