import { useCallback } from "react";
import { useFlash } from "./useFlash";
import { getMe } from "../api/requests/authentication";
import { useDispatch } from "react-redux";
import { logInUser } from "../store/authentication";

export const useAuth = () => {
    const { handleError } = useFlash();
    const dispatch = useDispatch();

    const authenticateUser = useCallback(async () => {
        const tokenFromLocalStorage = window.localStorage.getItem("token");

        if (!tokenFromLocalStorage) {
            return;
        }

        try {
            const res = await getMe(tokenFromLocalStorage);
            const {
                message,
                user: { name, email },
            } = res;
            if (message === "Success" && email) {
                dispatch(
                    logInUser({
                        payload: { token: tokenFromLocalStorage, name },
                    }),
                );
            }
        } catch (err) {
            handleError(err, { flash: true });
        }
    }, [handleError, dispatch]);

    return { authenticateUser };
};
