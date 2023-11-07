import { useForm } from "react-hook-form";
import { FormInput } from "../../../../../../Common/Input/FormInput";
import { PasswordChange } from "../services/types";
import { ButtonLoading } from "../../../../../../Common/Button/ButtonLoading";
import { useState } from "react";
import { FormDirty } from "../../../../../../Common/Input/FormDirty";

export const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm<PasswordChange>();
    const {
        register,
        formState: { errors },
        handleSubmit,
        formState,
    } = form;

    const onSubmit = handleSubmit((data: PasswordChange) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    });

    return (
        <FormDirty
            cancelPathRedirect="/"
            formState={formState}
            onSubmit={onSubmit}
        >
            <div className="container">
                <h4>Change password</h4>
                <div className="row">
                    <div className="col-12">
                        <FormInput
                            register={register}
                            name="currentPassword"
                            errors={errors}
                            label="Current password"
                            type="password"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FormInput
                            register={register}
                            name="newPassword"
                            errors={errors}
                            label="New password"
                            type="password"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <FormInput
                            register={register}
                            name="confirmNewPassword"
                            errors={errors}
                            label="Confirm new password"
                            type="password"
                        />
                    </div>
                </div>
                <ButtonLoading loading={loading}>Submit</ButtonLoading>
            </div>
        </FormDirty>
    );
};
