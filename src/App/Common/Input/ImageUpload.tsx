import { Controller, UseFormRegister } from "react-hook-form";
import classes from "../styles/Input.module.css";

interface Props {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    isMultiple?: boolean;
    control: any;
}

export const ImageUpload = (props: Props) => {
    const { label, name, register, isMultiple, control } = props;
    const { formLabel } = classes;
    return (
        <Controller
            control={control}
            name="images"
            render={() => (
                <div>
                    <label htmlFor={name} className={formLabel}>
                        {label}
                    </label>
                    <input
                        type="file"
                        id={name}
                        {...register(name)}
                        // multiple={isMultiple}
                    />
                </div>
            )}
        />
    );
};
