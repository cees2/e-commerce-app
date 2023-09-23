import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectToken } from "../store/authentication/selectors";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const { token } = useSelector(selectToken);

    return { isAuthenticated, setIsAuthenticated };
};
