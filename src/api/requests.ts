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
    const { data: products } = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=2&limit=8`,
    );

    return products;
};

export const getBestsellers = async () => {
    const { data: products } = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=1&limit=6`,
    );

    return products;
};

// This is proper implementation, but fake api throws 404 when trying to get response that way.

// export const getProductsByCategory = async (categoryName: string) => {
//     const { data: products } = await axios.get(
//         `https://api.escuelajs.co/api/v1/categories/1/${categoryName}`,
//     );

//     return products;
// };

export const getProductsByCategory = async (categoryName: string) => {
    categoryName || ""; // To get rid of ts error

    const { data: products } = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/1/products`,
    );

    return products;
};
