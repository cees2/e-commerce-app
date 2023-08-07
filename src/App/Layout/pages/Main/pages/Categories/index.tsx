import classes from "../../styles/Categories.module.css";
import { Dropdown } from "react-bootstrap";
import ClothesSVG from "../../../../../../graphics/Categories/clothes.svg";
import ElectronicsSVG from "../../../../../../graphics/Categories/electronics.svg";
import FurnituresSVG from "../../../../../../graphics/Categories/furnitures.svg";
import OthersSVG from "../../../../../../graphics/Categories/others.svg";
import ShoesSVG from "../../../../../../graphics/Categories/shoes.svg";

interface CategoryItemProps {
    name: string;
    svg: string;
}

const CategoryItem = ({ name, svg }: CategoryItemProps) => {
    const { categoryItemSVG } = classes;

    const handleClick = () => {
        console.log("EXEC", name);
    };

    return (
        <Dropdown.Item className="py-2" onClick={handleClick}>
            <img src={svg} alt={name} className={categoryItemSVG} />
            <span>{name}</span>
        </Dropdown.Item>
    );
};

export const Categories = () => {
    const { categoryListTrigger, categoryDropdownOptionsWrapper } = classes;

    const categoriesData = [
        {
            name: "Item1",
            svg: ClothesSVG,
            id: 1,
        },
        {
            name: "Item2",
            svg: ElectronicsSVG,
            id: 2,
        },
        {
            name: "Item3",
            svg: FurnituresSVG,
            id: 3,
        },
        {
            name: "Item4",
            svg: ShoesSVG,
            id: 4,
        },
        {
            name: "Item5",
            svg: OthersSVG,
            id: 5,
        },
    ];

    return (
        <Dropdown>
            <Dropdown.Toggle className={categoryListTrigger}>
                Categories
            </Dropdown.Toggle>
            <Dropdown.Menu className={categoryDropdownOptionsWrapper}>
                {categoriesData.map((category) => (
                    <CategoryItem
                        key={category.id}
                        svg={category.svg}
                        name={category.name}
                    />
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
