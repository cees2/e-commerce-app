import { LoaderFunctionArgs } from "react-router-dom";
import { getProductsByCategory } from "../../../../../api/requests";
import { useLoaderData } from "react-router-dom";
import { CategoryProducts } from "../../../../Common/CategoryProducts";
import { ProductApi } from "../../../../../api/types";

export const ClothingProductsPage = () => {
    const categoryProducts = useLoaderData() as ProductApi[];
    console.log(categoryProducts);

    return <CategoryProducts products={categoryProducts} />;
};

export const loadCategoryProducts = async ({ params }: LoaderFunctionArgs) => {
    const { categoryId } = params;
    return getProductsByCategory(categoryId || "");
};
