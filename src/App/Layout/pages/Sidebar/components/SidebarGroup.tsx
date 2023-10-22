import { SidebarConfig } from "../services/types";
import classes from "../styles/sidebarGroup.module.css";
import { SidebarElement } from "./SidebarElement";

interface Props {
    config: SidebarConfig[];
    title: string;
    setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarGroup = ({ config, title, setSidebarActive }: Props) => {
    const { sidebarGroupWrapper, sidebarList, sidebarGroupTitle } = classes;

    const hideSidebar = () => setSidebarActive(false);

    return (
        <div className={sidebarGroupWrapper} onClick={hideSidebar}>
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
