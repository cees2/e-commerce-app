import axios from "axios";
import { assignSvgToCategory } from "../services/Categories";
import { CategoryWithoutSvgApi } from "./types";

export const getCategories = async () => {
    const { data: categories } = await axios.get<CategoryWithoutSvgApi[]>(
        "https://api.escuelajs.co/api/v1/categories",
    );

    return assignSvgToCategory(categories);
};

// Note: Following requests get random data from server

export const getTimeLimitedDeals = async () => {
    const { data: deals } = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=2&limit=8`,
    );

    return deals;
};

export const getBestsellers = async () => {
    const { data: deals } = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=1&limit=6`,
    );

    return deals;
};
