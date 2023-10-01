import { LoaderFunctionArgs } from "react-router-dom";
import { getProductsByCategory } from "../../../../../api/Old/requests";
import { useLoaderData } from "react-router-dom";
import { CategoryProducts } from "../../../../Common/CategoryProducts";
import { ProductApi } from "../../../../../services/types";

export const ClothingProductsPage = () => {
    const categoryProducts = useLoaderData() as ProductApi[];
    return <CategoryProducts products={categoryProducts} />;
};

export const loadCategoryProducts = async ({ params }: LoaderFunctionArgs) => {
    const { categoryId } = params;
    return getProductsByCategory(categoryId || "");
};
