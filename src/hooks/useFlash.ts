import { useFlashContext } from "../App/Layout/pages/Flash";
import { FlashType } from "../services/types";

export const useFlash = () => {
    const { addFlash } = useFlashContext();

    const handleError = (error: any) => {
        const requestError = error.name === "AxiosError";

        if (requestError) {
            const statusNot200 = Boolean(error.response);
            const noResponseReceived = Boolean(error.request);
            let message = "";

            if (statusNot200) {
                const errorJSON = error.toJSON();

                console.log(error);
                console.log(errorJSON);
            } else if (noResponseReceived) {
                message = "Server internal error. Try again later";
            } else {
                message = "Something went wrong. Try again later";
            }

            addFlash(FlashType.ERROR, message);
        }
    };

    const handleSuccess = () => {};

    const handleWarning = () => {};

    return { handleError, handleSuccess, handleWarning };
};