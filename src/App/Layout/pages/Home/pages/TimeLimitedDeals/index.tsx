import { HomeListOfProducts } from "../../../../../Common/HomeProductsList";
import { ProductTypesApi } from "../../../../../Common/services/types";
import { ProductApi } from "../../../../../../services/types";

interface Props {
    products: ProductApi[];
}

export const TimeLimitedDeals = ({ products }: Props) => {
    return (
        <HomeListOfProducts
            products={products}
            type={ProductTypesApi.TIME_LIMITED}
            listHeaderName="Time limited deals"
        />
    );
};
