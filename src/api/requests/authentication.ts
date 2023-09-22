import axios from "axios";
import { LogInCredentials, RegisterCredentials } from "../../services/types";
import { parseApiData } from "../services/api-service";
import { BASE_URL } from "../common";

export const loginUser = (data: LogInCredentials): Promise<any> => {
    return parseApiData(axios.post(`${BASE_URL}/users/login`, data));
};

export const registerUser = (data: RegisterCredentials): Promise<any> => {
    return parseApiData(axios.post(`${BASE_URL}/users/signup`, data));
};

export const getMe = () => {};
