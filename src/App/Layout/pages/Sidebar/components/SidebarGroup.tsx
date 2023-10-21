import { SidebarConfig } from "../services/types";
import classes from "../styles/sidebarGroup.module.css";
import { SidebarElement } from "./SidebarElement";

interface Props {
    config: SidebarConfig[];
    title: string;
}

export const SidebarGroup = ({ config, title }: Props) => {
    const { sidebarGroupWrapper, sidebarList, sidebarGroupTitle } = classes;

    return (
        <div className={sidebarGroupWrapper}>
            <h2 className={sidebarGroupTitle}>{title}</h2>
            <ul className={sidebarList}>
                {config.map((sidebarGroup) => (
                    <SidebarElement
                        name={sidebarGroup.name}
                        link={sidebarGroup.link}
                    />
                ))}
            </ul>
        </div>
    );
};
