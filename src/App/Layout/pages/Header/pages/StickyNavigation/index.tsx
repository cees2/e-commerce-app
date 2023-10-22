import classes from "../../styles/StickyNavigation.module.css";
import HomeSVG from "../../../../../../graphics/StickyNavigation/home.svg";
import ShoppingCart from "../../../../../../graphics/StickyNavigation/shopping_cart.svg";
import UserAccount from "../../../../../../graphics/StickyNavigation/user_account.svg";
import LogIn from "../../../../../../graphics/StickyNavigation/log_in.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../../../../store/authentication/selectors";

interface Props {
    setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StickyNavigation = (props: Props) => {
    const { setSidebarActive } = props;
    const { stickyNavigationBar, stickyNavigationItem } = classes;
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const handleAccountIconClicked = () =>
        setSidebarActive((active: boolean) => !active);

    const hideSidebar = () => setSidebarActive(false);

    return (
        <div className={stickyNavigationBar}>
            <Link to="/" onClick={hideSidebar}>
                <div className={stickyNavigationItem}>
                    <img src={HomeSVG} alt="home" />
                    <p>Start</p>
                </div>
            </Link>
            <Link to="/cart" onClick={hideSidebar}>
                <div className={stickyNavigationItem}>
                    <img src={ShoppingCart} alt="shopping cart" />
                    <p>Cart</p>
                </div>
            </Link>
            {!isAuthenticated && (
                <Link to="/auth/login">
                    <div className={stickyNavigationItem}>
                        <img src={LogIn} alt="log in" />
                        <p>Log in</p>
                    </div>
                </Link>
            )}
            {isAuthenticated && (
                <div
                    className={stickyNavigationItem}
                    onClick={handleAccountIconClicked}
                >
                    <img src={UserAccount} alt="user account" />
                    <p>Account</p>
                </div>
            )}
        </div>
    );
};
