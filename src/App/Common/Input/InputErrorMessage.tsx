import classes from "../styles/Input.module.css";

export const InputErrorMessage = ({
    errorMessage,
}: {
    errorMessage: string;
}) => {
    const { errorMessageText } = classes;

    return (
        <div className="text-center mt-1">
            <span className={errorMessageText}>{errorMessage}</span>
        </div>
    );
};
