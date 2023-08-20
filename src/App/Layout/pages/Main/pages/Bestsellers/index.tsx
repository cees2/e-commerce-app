import { ProductApi } from "../../../../../../api/types";
import { ListOfProducts } from "../../../../../Common/ListOfProducts";
import { ProductTypesApi } from "../../../../../Common/services/types";

interface Props {
    products: ProductApi[];
}

export const Bestsellers = ({ products }: Props) => {
    return (
        <ListOfProducts
            products={products}
            type={ProductTypesApi.BESTSELLER}
            listHeaderName="Bestsellers"
        />
    );
};
