import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";
import { InputErrorMessage } from "./InputErrorMessage";
import classes from "../styles/Input.module.css";

interface Props {
    name: string;
    register: UseFormRegister<any>;
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
    errors: FieldErrors;
    currencyInput?: boolean;
}

const getErrorMessage = (name: string, errors: FieldErrors) => {
    if (errors) return errors[name]?.message;

    return null;
};

export const FormInput = ({
    name,
    register,
    label,
    type,
    className,
    placeholder,
    errors,
}: Props) => {
    const errorMessage = getErrorMessage(name, errors) as
        | string
        | null
        | undefined;
    const { formInput, formLabel } = classes;

    return (
        <Form.Group className={`${className} mt-2`}>
            {label && <Form.Label className={formLabel}>{label}</Form.Label>}
            <Form.Control
                {...register(name)}
                type={type || "text"}
                placeholder={placeholder}
                className={formInput}
            />
            {errorMessage && <InputErrorMessage errorMessage={errorMessage} />}
        </Form.Group>
    );
};
