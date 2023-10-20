import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    name: null,
    isAuthenticated: false,
    userRole: null,
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        logInUser(state, action) {
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.isAuthenticated = true;
            state.userRole = action.payload.role;
        },
        logOutUser(state) {
            state.token = null;
            state.name = null;
            state.isAuthenticated = false;
            state.userRole = null;
        },
        setToken(state, action) {
            state.token = action.payload.token;
        },
    },
});

export default authenticationSlice.reducer;

export const { logInUser, logOutUser, setToken } = authenticationSlice.actions;
