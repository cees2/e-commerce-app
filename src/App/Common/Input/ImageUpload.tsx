import { UseFormRegister } from "react-hook-form";
import classes from "../styles/Input.module.css";

interface Props {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    isMultiple?: boolean;
}

export const ImageUpload = (props: Props) => {
    const { label, name, register, isMultiple } = props;
    const { formLabel } = classes;
    return (
        <div>
            <label htmlFor={name} className={formLabel}>
                {label}
            </label>
            <input
                type="file"
                id={name}
                {...register(name)}
                multiple={Boolean(isMultiple)}
            />
        </div>
    );
};
