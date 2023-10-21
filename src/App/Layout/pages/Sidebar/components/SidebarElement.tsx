import { Link } from "react-router-dom";
import classes from "../styles/sidebarElement.module.css";

interface Props {
    name: string;
    link: string;
}

export const SidebarElement = ({ name, link }: Props) => {
    const { sidebarListItem } = classes;
    return (
        <li className={sidebarListItem}>
            <Link to={link}>
                <span>{name}</span>
            </Link>
        </li>
    );
};
