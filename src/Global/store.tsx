import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ReduxState";

export const store = configureStore({
  reducer,
});