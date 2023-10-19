import { RootState } from "..";

export const selectName = (state: RootState) => state.authReducer.name;

export const selectToken = (state: RootState) => state.authReducer.token;

export const selectIsAuthenticated = (state: RootState) =>
    state.authReducer.isAuthenticated;
