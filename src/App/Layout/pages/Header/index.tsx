import { StickyNavigation } from "./pages/StickyNavigation";
import { MainHeader } from "./pages/MainHeader";
import { useAuth } from "../../../../hooks/useAuth";
import { useEffect } from "react";

export const Header = () => {
    const shouldStickyNavigationBeDisplayed = window.innerWidth <= 600;
    const { authenticateUser } = useAuth();

    useEffect(() => {
        authenticateUser();
    }, [authenticateUser]);

    return (
        <div>
            <MainHeader />
            {shouldStickyNavigationBeDisplayed && <StickyNavigation />}
        </div>
    );
};
