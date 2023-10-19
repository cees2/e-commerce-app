import { UseFormSetError } from "react-hook-form";
import { useFlashContext } from "../App/Common/Flash";
import { FlashType, InvalidFormField } from "../services/types";
import { useCallback } from "react";

interface ErrorConfig {
    form?: boolean;
    flash?: boolean;
    setError?: UseFormSetError<any>;
}

export const useFlash = () => {
    const { addFlash } = useFlashContext();

    const handleError = useCallback(
        (error: any, { form, flash, setError }: ErrorConfig) => {
            const requestError = error.name === "AxiosError";

            if (requestError) {
                const statusNot200 = Boolean(error.response);
                const noResponseReceived = Boolean(error.request);
                let message = "";

                if (statusNot200) {
                    message = error.response.data.message;
                } else if (noResponseReceived) {
                    message = "Server internal error. Try again later";
                } else {
                    message = "Something went wrong. Try again later";
                }

                if (flash) addFlash(FlashType.ERROR, message);

                if (form && setError) {
                    error.response.data.errors.forEach(
                        (fieldValueError: InvalidFormField) => {
                            setError(fieldValueError.name, {
                                message: fieldValueError.message,
                            });
                        },
                    );
                }
            }
        },
        [addFlash],
    );

    const handleSuccess = (message: string) =>
        addFlash(FlashType.SUCCESS, message);

    const handleWarning = (message: string) =>
        addFlash(FlashType.WARNING, message);

    return { handleError, handleSuccess, handleWarning };
};
