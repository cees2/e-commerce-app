import { ListOfProducts } from "../../../../../Common/ListOfProducts";
import { ProductTypesApi } from "../../../../../Common/services/types";
import { ProductApi } from "../../../../../../api/types";

interface Props {
    products: ProductApi[];
}

export const TimeLimitedDeals = ({ products }: Props) => {
    return (
        <ListOfProducts
            products={products}
            type={ProductTypesApi.TIME_LIMITED}
            listHeaderName="Time limited deals"
        />
    );
};
