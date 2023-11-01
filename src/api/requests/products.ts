import axios from "axios";
import { NewProductApi } from "../../App/Layout/pages/Products/services/types";
import { BASE_URL } from "../common";

export const createProduct = (
    data: FormData,
    token: string | null,
): Promise<NewProductApi> => {
    return axios.post(`${BASE_URL}/products`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "multipart/form-data",
        },
    });
};
