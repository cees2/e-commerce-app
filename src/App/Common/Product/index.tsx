import { ProductApi } from "../../../api/types";
import classes from "../styles/Product.module.css";

export const Product = ({ title, price, description, images }: ProductApi) => {
    const {
        productContainer,
        productTitle,
        productPrice,
        productDescription,
        productImage,
    } = classes;

    return (
        <div className={productContainer}>
            <img src={images[0]} alt={title} className={productImage} />
            <h3 className={productTitle}>{title}</h3>
            <span className={productPrice}>{price}</span>
            <p className={productDescription}>{description}</p>
        </div>
    );
};
