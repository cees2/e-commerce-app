import {
    ClothingProductsPage,
    loadCategoryProducts,
} from "../../../../../App/Layout/pages/CategoryProducts/Clothing";

export const clothingRouting = {
    path: "clothes",
    element: <ClothingProductsPage />,
    loader: loadCategoryProducts,
};
