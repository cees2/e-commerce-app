import axios from "axios";

export const getCategories = () => {
    return axios.get("https://api.escuelajs.co/api/v1/categories")
}