import { UseFormRegister } from "react-hook-form";
import classes from "../styles/Input.module.css";

interface Props {
    label: string;
    children?: string;
    register: UseFormRegister<any>;
    name: string;
}

export const TextareaInput = (props: Props) => {
    const { label, children, name, register } = props;
    const { textAreaWrapper, textArea, textAreaLabel } = classes;

    return (
        <div className={textAreaWrapper}>
            <label htmlFor={name} className={textAreaLabel}>
                {label}
            </label>
            <textarea id={name} className={textArea} {...register(name)}>
                {children}
            </textarea>
        </div>
    );
};
