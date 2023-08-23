import { ProductApi } from "../../../api/types";

interface Props {
    products: ProductApi[];
}

export const CategoryProducts = ({ products }: Props) => {
    return (
        <div>
            {products.map((product) => (
                <div>{product.title}</div>
            ))}
        </div>
    );
};
