import classes from "../../styles/StickyNavigation.module.css";
import HomeSVG from "../../../../../../graphics/StickyNavigation/home.svg";
import ShoppingCart from "../../../../../../graphics/StickyNavigation/shopping_cart.svg";
import UserAccount from "../../../../../../graphics/StickyNavigation/user_account.svg";
import LogIn from "../../../../../../graphics/StickyNavigation/log_in.svg";
import { Link } from "react-router-dom";

export const StickyNavigation = () => {
    const { stickyNavigationBar, stickyNavigationItem } = classes;

    return (
        <div className={stickyNavigationBar}>
            <Link to="/">
                <div className={stickyNavigationItem}>
                    <img src={HomeSVG} alt="home" />
                    <p>Start</p>
                </div>
            </Link>
            <Link to="/cart">
                <div className={stickyNavigationItem}>
                    <img src={ShoppingCart} alt="shopping cart" />
                    <p>Cart</p>
                </div>
            </Link>
            <Link to="/auth/login">
                <div className={stickyNavigationItem}>
                    <img src={LogIn} alt="log in" />
                    <p>Log in</p>
                </div>
            </Link>
            {false && (
                <Link to="/user">
                    <div className={stickyNavigationItem}>
                        <img src={UserAccount} alt="user account" />
                        <p>Account</p>
                    </div>
                </Link>
            )}
        </div>
    );
};
