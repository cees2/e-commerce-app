import { Button } from "react-bootstrap";
import { SidebarGroup } from "./components/SidebarGroup";
import { SidebarConfig } from "./services/types";
import classes from "./styles/sidebarElement.module.css";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../../store/authentication";

interface Props {
    sidebarActive: boolean;
}

const productGroupConfig = [
    {
        name: "My purchases",
        link: "/user/:userId/purchases",
    },
    {
        name: "Create new product",
        link: "/products/new",
    },
] as SidebarConfig[];

const accountGroupConfig = [
    {
        name: "Change password",
        link: "/account/change_password",
    },
    {
        name: "Change account data",
        link: "/account/change_account_data",
    },
] as SidebarConfig[];

export const Sidebar = (props: Props) => {
    const { sidebarActive } = props;
    const { sidebarWrapper, activateSidebar, logoutButton } = classes;
    const dispatch = useDispatch();

    const logOutHandler = () => dispatch(logOutUser());

    return (
        <div
            className={`${sidebarWrapper} ${
                sidebarActive ? activateSidebar : ""
            }`}
        >
            <SidebarGroup config={productGroupConfig} title="Products" />
            <SidebarGroup config={accountGroupConfig} title="Account" />
            <Button onClick={logOutHandler} className={logoutButton}>
                Log out
            </Button>
        </div>
    );
};
