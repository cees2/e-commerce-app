import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { selectToken } from "../store/authentication/selectors";
import { useCookies } from "react-cookie";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const { token } = useSelector(selectToken);
    const [cookies] = useCookies();

    useEffect(() => {
        console.log(cookies);
    }, []);

    return { isAuthenticated };
};
