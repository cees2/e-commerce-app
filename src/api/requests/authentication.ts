import axios from "axios";
import { LogInCredentials, RegisterCredentials } from "../../services/types";
import { parseApiData } from "../services/api-service";
import { BASE_URL } from "../common";

export const loginUser = (data: LogInCredentials): Promise<any> =>
    parseApiData(axios.post(`${BASE_URL}/users/login`, data));

export const registerUser = (data: RegisterCredentials): Promise<any> =>
    parseApiData(axios.post(`${BASE_URL}/users/signup`, data));

export const getMe = (token: string) => {
    return parseApiData(
        axios.get(`${BASE_URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    );
};
