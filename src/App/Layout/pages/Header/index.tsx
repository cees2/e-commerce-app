import { StickyNavigation } from "./pages/StickyNavigation";
import { MainHeader } from "./pages/MainHeader";

export const Header = () => {
    const shouldStickyNavigationBeDisplayed = window.innerWidth <= 600;
    return (
        <div>
            <MainHeader />
            {shouldStickyNavigationBeDisplayed && <StickyNavigation />}
        </div>
    );
};
