import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";
import { InputErrorMessage } from "./InputErrorMessage";

interface Props {
    name: string;
    register: UseFormRegister<any>;
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
    errors: FieldErrors;
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

    return (
        <Form.Group className={`${className} mt-2`}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                {...register(name)}
                type={type || "text"}
                placeholder={placeholder}
            />
            {errorMessage && <InputErrorMessage errorMessage={errorMessage} />}
        </Form.Group>
    );
};
