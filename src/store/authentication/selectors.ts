import { RootState } from "..";

export const selectName = () => (state: RootState) => state.authReducer.name;

export const selectToken = () => (state: RootState) => state.authReducer.token;
