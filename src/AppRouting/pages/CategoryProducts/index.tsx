import { ProductsIndexPage } from "../../../App/Layout/pages/CategoryProducts";
import { clothingRouting } from "./pages/Clothing";
import { electronicsRouting } from "./pages/Electronics";

export const categoryProductsRouting = {
    path: "/category_products",
    element: <ProductsIndexPage />,
    children: [clothingRouting, electronicsRouting],
};
