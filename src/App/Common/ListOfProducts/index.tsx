import { Product } from "./Product";
// import LeftArrow from "../../../graphics/Common/left_arrow.svg";
// import RightArrow from "../../../graphics/Common/right_arrow.svg";
import { ProductApi } from "../../../api/types";
import classes from "../styles/ListOfProducts.module.css";
import { ProductTypesApi } from "../services/types";

interface Props {
    products: ProductApi[];
    type: ProductTypesApi;
    listHeaderName: string;
}

export const ListOfProducts = ({ products, type, listHeaderName }: Props) => {
    const {
        productsListWrapper,
        // navigationLeftArrow,
        // navigationRightArrow,
        productItemsWrapper,
    } = classes;

    return (
        <div className="mt-1">
            <h3 className="mb-1">{listHeaderName}</h3>
            <div className={productsListWrapper}>
                {/* <img
                src={LeftArrow}
                alt="left arrow"
                className={navigationLeftArrow}
            /> */}
                <div className={productItemsWrapper}>
                    {products.map((product) => (
                        <Product
                            product={product}
                            type={type}
                            key={product.id}
                        />
                    ))}
                </div>
                {/* <img
                src={RightArrow}
                alt="right arrow"
                className={navigationRightArrow}
            /> */}
            </div>
        </div>
    );
};
