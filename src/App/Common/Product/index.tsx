import { ProductApi } from "../../../api/types";
import classes from "../styles/Product.module.css";
import { formatMoney } from "../../../utils/formatters";

export const Product = ({ title, price, images }: ProductApi) => {
    const { productTitle, productPrice, productImage, productWrapper } =
        classes;

    return (
        <div className={productWrapper}>
            <img src={images[0]} alt={title} className={productImage} />
            <h3 className={productTitle}>{title}</h3>
            <span className={productPrice}>
                {formatMoney({ amount: price, currency: "PLN" })}
            </span>
        </div>
    );
};
