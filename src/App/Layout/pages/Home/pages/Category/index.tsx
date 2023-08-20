import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../../../../utils/formatters";

type Params = {
    categoryId: string;
};

export const CategoriesIndexPage = () => {
    const { categoryId } = useParams<Params>();
    const categoryName = capitalizeFirstLetter(categoryId || "");

    return (
        <>
            <span className="d-block text-center mt-1">{categoryName}</span>
            <Outlet />
        </>
    );
};
