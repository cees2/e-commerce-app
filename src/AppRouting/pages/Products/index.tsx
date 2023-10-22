import { newProductRouting } from "./NewProduct";

export const productRouting = {
    path: "/products",
    children: [newProductRouting],
};
