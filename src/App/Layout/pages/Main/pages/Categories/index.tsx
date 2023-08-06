import { Dropdown } from "react-bootstrap";

// const CategoriesList = () => {};

// const CategoriesItem = () => {};

export const Categories = () => {
    return (
        <Dropdown className="w-100">
            <Dropdown.Toggle>Category</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Item1</Dropdown.Item>
                <Dropdown.Item>Item2</Dropdown.Item>
                <Dropdown.Item>Item3</Dropdown.Item>
                <Dropdown.Item>Item4</Dropdown.Item>
                <Dropdown.Item>Item5</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
