import { Button } from "react-bootstrap";
import { SidebarGroup } from "./components/SidebarGroup";
import { SidebarConfig } from "./services/types";
import classes from "./styles/sidebarElement.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../../store/authentication";
import { selectUserRole } from "../../../../store/authentication/selectors";
import { userRole } from "../../../../services/types";

interface Props {
    sidebarActive: boolean;
    setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

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

const getProductGroupConfig = (role: userRole | null) => {
    const productGroupConfig = [
        {
            name: "My purchases",
            link: "/user/:userId/purchases",
        },
    ] as SidebarConfig[];

    if (role !== userRole.USER)
        productGroupConfig.push({
            name: "Create new product",
            link: "/products/new",
        });

    return productGroupConfig;
};

export const Sidebar = (props: Props) => {
    const { sidebarActive, setSidebarActive } = props;
    const { sidebarWrapper, activateSidebar, logoutButton } = classes;
    const dispatch = useDispatch();
    const role = useSelector(selectUserRole);
    const productGroupConfig = getProductGroupConfig(role);

    const logOutHandler = () => dispatch(logOutUser());

    return (
        <div
            className={`${sidebarWrapper} ${
                sidebarActive ? activateSidebar : ""
            }`}
        >
            <SidebarGroup
                config={productGroupConfig}
                title="Products"
                setSidebarActive={setSidebarActive}
            />
            <SidebarGroup
                config={accountGroupConfig}
                title="Account"
                setSidebarActive={setSidebarActive}
            />
            <Button onClick={logOutHandler} className={logoutButton}>
                Log out
            </Button>
        </div>
    );
};
