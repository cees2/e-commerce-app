import { UseFormRegister } from "react-hook-form";

interface Props {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    isMultiple?: boolean;
}

export const ImageUpload = (props: Props) => {
    const { label, name, register, isMultiple } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type="file"
                id={name}
                {...register(name)}
                multiple={Boolean(isMultiple)}
            />
        </div>
    );
};
