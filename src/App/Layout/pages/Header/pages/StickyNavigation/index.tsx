import classes from "../../styles/StickyNavigation.module.css";
import HomeSVG from "../../../../../../graphics/StickyNavigation/home.svg";
import ShoppingCart from "../../../../../../graphics/StickyNavigation/shopping_cart.svg";
import UserAccount from "../../../../../../graphics/StickyNavigation/user_account.svg";

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
