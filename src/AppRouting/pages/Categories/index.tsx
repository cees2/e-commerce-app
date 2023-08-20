import { CategoriesIndexPage } from "../../../App/Layout/pages/Home/pages/Category";
import { CategoryProductsList } from "../../../App/Layout/pages/Home/pages/Category/pages/index";
import { loadCategoryProducts } from "../../../App/Layout/pages/Home/pages/Category/pages/index";

export const categoriesRouting = {
    path: "/categories",
    element: <CategoriesIndexPage />,
    children: [
        {
            path: ":categoryId",
            element: <CategoryProductsList />,
            loader: loadCategoryProducts,
        },
    ],
};
