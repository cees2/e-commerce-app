import classes from "./styles/index.module.css";
import HomeSVG from "../../../../graphics/home.svg";
import ShoppingCart from "../../../../graphics/shopping_cart.svg";
import UserAccount from "../../../../graphics/user_account.svg";

export const StickyNavigation = () => {
    const { stickyNavigationBar, stickyNavigationItem } = classes;

    return (
        <div className={stickyNavigationBar}>
            <div className={stickyNavigationItem}>
                <img src={HomeSVG} alt="home" />
                <p>Start</p>
            </div>
            <div className={stickyNavigationItem}>
                <img src={ShoppingCart} alt="shopping cart" />
                <p>Cart</p>
            </div>
            <div className={stickyNavigationItem}>
                <img src={UserAccount} alt="user account" />
                <p>Account</p>
            </div>
        </div>
    );
};
