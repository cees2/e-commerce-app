import { Product } from "../Product";
// import LeftArrow from "../../../graphics/Common/left_arrow.svg";
// import RightArrow from "../../../graphics/Common/right_arrow.svg";
import { ProductApi } from "../../../api/types";
import classes from "../styles/ListOfProducts.module.css";
import { ProductTypesApi } from "../services/types";

interface Props {
    products: ProductApi[];
    type: ProductTypesApi;
}

export const ListOfProducts = ({ products, type }: Props) => {
    const {
        productsListWrapper,
        // navigationLeftArrow,
        // navigationRightArrow,
        productItemsWrapper,
    } = classes;

    return (
        <div className={productsListWrapper}>
            {/* <img
                src={LeftArrow}
                alt="left arrow"
                className={navigationLeftArrow}
            /> */}
            <div className={productItemsWrapper}>
                {products.map((product) => (
                    <Product product={product} type={type} />
                ))}
            </div>
            {/* <img
                src={RightArrow}
                alt="right arrow"
                className={navigationRightArrow}
            /> */}
        </div>
    );
};
