import classes from "../styles/Categories.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CategoryApi } from "../../../../../api/types";

interface CategoryItemProps {
    name: string;
    svg: string;
}

interface Props {
    categories: CategoryApi[];
}

const CategoryItem = ({ name, svg }: CategoryItemProps) => {
    const { categoryItemSVG } = classes;

    const handleClick = () => {
        console.log("EXEC", name);
    };

    return (
        <Dropdown.Item className="py-2" onClick={handleClick}>
            <Link to={`/products/${name.toLowerCase()}`} className="w-100">
                <img src={svg} alt={name} className={categoryItemSVG} />
                <span>{name}</span>
            </Link>
        </Dropdown.Item>
    );
};

export const CategoriesDropdown = ({ categories }: Props) => {
    const { categoryListTrigger, categoryDropdownOptionsWrapper } = classes;

    return (
        <Dropdown>
            <Dropdown.Toggle className={categoryListTrigger}>
                Categories
            </Dropdown.Toggle>
            <Dropdown.Menu className={categoryDropdownOptionsWrapper}>
                {categories?.map((category) => (
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