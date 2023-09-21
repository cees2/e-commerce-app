import { CategoryApi, CategoryWithoutSvgApi } from "./types";
import ClothesSVG from "../graphics/Categories/clothes.svg";
import ElectronicsSVG from "../graphics/Categories/electronics.svg";
import FurnituresSVG from "../graphics/Categories/furnitures.svg";
import OthersSVG from "../graphics/Categories/others.svg";
import ShoesSVG from "../graphics/Categories/shoes.svg";

const getCategorySVG = (categoryName: string) => {
    switch (categoryName) {
        case "Clothes":
            return ClothesSVG;
            break;
        case "Electronics":
            return ElectronicsSVG;
            break;
        case "Shoes":
            return ShoesSVG;
            break;
        case "Others":
            return OthersSVG;
            break;
        case "Admin":
            return FurnituresSVG;
            break;
        default:
            return "";
    }
};

export const assignSvgToCategory = (categories: CategoryWithoutSvgApi[]) => {
    const categoriesWithSVG = categories.map(
        (category: CategoryWithoutSvgApi) => ({
            ...category,
            svg: getCategorySVG(category.name),
        }),
    );

    return categoriesWithSVG.filter((category: CategoryApi) => category.svg);
};
