import { ProductsIndexPage } from "../../../App/Layout/pages/CategoryProducts";
import { clothingRouting } from "./pages/Clothing";
import { electronicsRouting } from "./pages/Electronics";

export const productsRouting = {
    path: "/products",
    element: <ProductsIndexPage />,
    children: [clothingRouting, electronicsRouting],
};
