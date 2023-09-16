import { UseFormRegister } from "react-hook-form";
import { Form } from "react-bootstrap";

interface Props {
    name: string;
    register: UseFormRegister<any>;
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
}

export const FormInput = ({
    name,
    register,
    label,
    type,
    className,
    placeholder,
}: Props) => {
    return (
        <Form.Group className={`${className} mt-2`}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                {...register(name)}
                type={type || "text"}
                placeholder={placeholder}
            />
        </Form.Group>
    );
};
