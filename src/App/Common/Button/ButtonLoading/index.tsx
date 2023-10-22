import { Button, Spinner } from "react-bootstrap";
import { ButtonType } from "../../services/types";
import { ButtonVariant } from "react-bootstrap/esm/types";

interface Props {
    children: string;
    loading: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
    type?: ButtonType;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
}

const CustomButtonLoading = (props: Props) => {
    const { loading, style, children, disabled, onClick, className } = props;
    return (
        <button
            style={style}
            disabled={disabled}
            onClick={onClick}
            className={className}
        >
            {loading && (
                <Spinner
                    animation="border"
                    variant="light"
                    size="sm"
                    style={{ marginRight: "0.25rem" }}
                />
            )}
            {children}
            {loading && "loading..."}
        </button>
    );
};

export const ButtonLoading = (props: Props) => {
    const {
        loading,
        style,
        type,
        children,
        disabled,
        variant,
        onClick,
        className,
    } = props;

    return variant ? (
        <Button
            style={style}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={className}
            variant={variant}
        >
            {loading && (
                <Spinner
                    animation="border"
                    variant="light"
                    size="sm"
                    style={{ marginRight: "0.25rem" }}
                />
            )}
            {children}
        </Button>
    ) : (
        <CustomButtonLoading {...props} />
    );
};
