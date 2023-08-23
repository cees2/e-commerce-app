import { Outlet } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../../utils/formatters";
import { useParams } from "react-router-dom";

type Params = {
    categoryId: string;
};

export const ProductsIndexPage = () => {
    const { categoryId } = useParams<Params>();
    const categoryName = capitalizeFirstLetter(categoryId || "");

    return (
        <>
            <span className="d-block text-center mt-1">{categoryName}</span>
            <Outlet />
        </>
    );
};
