import { ProductApi } from "../../../../../../services/types";
import { HomeListOfProducts } from "../../../../../Common/HomeProductsList";
import { ProductTypesApi } from "../../../../../Common/services/types";

interface Props {
    products: ProductApi[];
}

export const Bestsellers = ({ products }: Props) => {
    return (
        <HomeListOfProducts
            products={products}
            type={ProductTypesApi.BESTSELLER}
            listHeaderName="Bestsellers"
        />
    );
};
