import { ProductsIndexPage } from "../../../App/Layout/pages/Products";
import { CategoryProductsList } from "../../../App/Layout/pages/Products/pages/index";
import { loadCategoryProducts } from "../../../App/Layout/pages/Products/pages/index";

export const productsRouting = {
    path: "/products",
    element: <ProductsIndexPage />,
    children: [
        {
            path: ":productId",
            element: <CategoryProductsList />,
            loader: loadCategoryProducts,
        },
    ],
};
