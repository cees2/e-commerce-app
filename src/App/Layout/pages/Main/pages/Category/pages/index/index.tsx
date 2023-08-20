// import { useState } from "react";
import { LoaderFunctionArgs } from "react-router-dom";
import { getProductsByCategory } from "../../../../../../../../api/requests";
import { useLoaderData } from "react-router-dom";

export const CategoryProductsList = () => {
    const categoryProducts = useLoaderData();
    console.log(categoryProducts);

    return <div>Category products list</div>;
};

export const loadCategoryProducts = async ({ params }: LoaderFunctionArgs) => {
    const { categoryId } = params;
    return getProductsByCategory(categoryId || "");
};
