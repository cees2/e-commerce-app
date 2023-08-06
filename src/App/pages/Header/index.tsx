import classes from "./styles/index.module.css";
import { StickyNavigation } from "./StickyNavigation";

export const Header = () => {
    const { headerWrapper } = classes;
    const shouldStickyNavigationBeDisplayed = window.innerWidth <= 600;
    return (
        <div>
            <header className={headerWrapper}>Fake e commerce app</header>
            {shouldStickyNavigationBeDisplayed && <StickyNavigation />}
        </div>
    );
};
