import { Product } from "../Product";
// import LeftArrow from "../../../graphics/Common/left_arrow.svg";
// import RightArrow from "../../../graphics/Common/right_arrow.svg";
import { ProductApi } from "../../../api/types";
import classes from "../styles/ListOfProducts.module.css";

export const ListOfProducts = ({ products }: { products: ProductApi[] }) => {
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
                    <Product {...product} />
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
