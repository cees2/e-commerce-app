import { CategoriesIndexPage } from "../../../App/Layout/pages/Main/pages/Category";
import { CategoryProductsList } from "../../../App/Layout/pages/Main/pages/Category/pages/index";
import { loadCategoryProducts } from "../../../App/Layout/pages/Main/pages/Category/pages/index";

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
