import { StickyNavigation } from "./pages/StickyNavigation";
import { MainHeader } from "./pages/MainHeader";
import { useAuth } from "../../../../hooks/useAuth";
import { useEffect } from "react";

interface Props {
    setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = (props: Props) => {
    const shouldStickyNavigationBeDisplayed = window.innerWidth <= 600;
    const { authenticateUser } = useAuth();

    useEffect(() => {
        authenticateUser();
    }, [authenticateUser]);

    return (
        <div>
            <MainHeader />
            {shouldStickyNavigationBeDisplayed && (
                <StickyNavigation {...props} />
            )}
        </div>
    );
};
