import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication/index";

export const store = configureStore({ reducer: { authReducer } });

export type RootState = ReturnType<typeof store.getState>;
