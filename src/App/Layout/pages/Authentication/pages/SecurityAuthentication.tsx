import { useEffect } from "react";
import { useAuth } from "../../../../../hooks/useAuth";
import { getMe } from "../../../../../api/requests/authentication";

export const SecurityAuthentication = ({
    children,
}: {
    children: JSX.Element;
}) => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    useEffect(() => {
        const getTokenFromLocalStorage = async () => {
            const tokenFromLocalStorage = localStorage.getItem("token");

            try {
                if (tokenFromLocalStorage) {
                    const res = await getMe(tokenFromLocalStorage);
                    if (res) setIsAuthenticated(true);
                }
            } catch (err) {
                console.log(err);
            }
        };

        getTokenFromLocalStorage();
    }, []);

    if (!isAuthenticated) {
        return null;
    }

    return children;
};
