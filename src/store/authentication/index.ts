import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    name: "",
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        logInUser(state, action) {
            state.token = action.payload.token;
            state.name = action.payload.name;
        },
        logOutUser(state) {
            state.token = null;
            state.name = "";
        },
        setToken(state, action) {
            state.token = action.payload.token;
        },
    },
});

export default authenticationSlice.reducer;

export const { logInUser, logOutUser, setToken } = authenticationSlice.actions;
