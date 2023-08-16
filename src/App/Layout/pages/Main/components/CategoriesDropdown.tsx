import classes from "../styles/Categories.module.css";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
// import { getCategories } from "../../../../../../api/requests";
import { categoriesList } from "../../../../../services/mockData";
import { CategoryApi } from "../../../../../api/types";
import { Link } from "react-router-dom";

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
            <Link to={`/categories/${name.toLowerCase()}`} className="w-100">
                <img src={svg} alt={name} className={categoryItemSVG} />
                <span>{name}</span>
            </Link>
        </Dropdown.Item>
    );
};

export const CategoriesDropdown = () => {
    const [categories, setCategories] = useState<CategoryApi[]>([]);
    useEffect(() => setCategories(categoriesList), []);

    const { categoryListTrigger, categoryDropdownOptionsWrapper } = classes;
    // const { categoryItemSVG } = classes;

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
