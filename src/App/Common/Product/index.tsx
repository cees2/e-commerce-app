import { ProductApi } from "../../../api/types";
import classes from "../styles/Product.module.css";
import { formatMoney } from "../../../utils/formatters";
import { ProductTypesApi, BadgeStatus } from "../services/types";
import { Badge } from "../Badge";

interface Props {
    product: ProductApi;
    type: ProductTypesApi;
}

export const Product = ({ product, type }: Props) => {
    const { title, price, images } = product;

    const { productTitle, productPrice, productImage, productWrapper } =
        classes;

    return (
        <div className={productWrapper}>
            <img src={images[0]} alt={title} className={productImage} />
            <h3 className={productTitle}>{title}</h3>
            <span className={productPrice}>
                {formatMoney({ amount: price, currency: "PLN" })}
                {type === ProductTypesApi.BESTSELLER && (
                    <Badge status={BadgeStatus.BESTSELLER} title="Bestseller" />
                )}
            </span>
        </div>
    );
};
