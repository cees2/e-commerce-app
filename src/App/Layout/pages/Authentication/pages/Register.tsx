import { Button } from "react-bootstrap";
import { FormInput } from "../../../../Common/Input/FormInput";
import { ButtonLoading } from "../../../../Common/Button/ButtonLoading";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "../styles/Common.module.css";
import { useState } from "react";
import { RegisterCredentials } from "../../../../../services/types";
import { registerUser } from "../../../../../api/requests/authentication";
import { useFlash } from "../../../../../hooks/useFlash";

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const { authWrapper, authHeader, logInOrRegisterBar } = classes;
    const form = useForm<RegisterCredentials>();
    const { handleError } = useFlash();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = form;

    const formSubmitHandler = handleSubmit(
        async (data: RegisterCredentials) => {
            try {
                setLoading(true);
                await registerUser(data);
            } catch (err) {
                handleError(err, { form: true, flash: true, setError });
            }
            setLoading(false);
        },
    );

    return (
        <div className={authWrapper}>
            <h3 className={authHeader}>Register</h3>
            <FormInput
                name="name"
                label="Name"
                register={register}
                errors={errors}
            />
            <FormInput
                type="email"
                name="email"
                label="Email"
                register={register}
                errors={errors}
            />
            <FormInput
                type="password"
                name="password"
                label="Password"
                register={register}
                errors={errors}
            />
            <FormInput
                type="password"
                name="passwordConfirm"
                label="Confirm password"
                register={register}
                errors={errors}
            />
            <div className={logInOrRegisterBar}>
                <Button variant="outline-light">
                    <Link to="/auth/login">Log in</Link>
                </Button>
                <ButtonLoading
                    loading={loading}
                    onClick={formSubmitHandler}
                    variant="success"
                >
                    Register
                </ButtonLoading>
            </div>
        </div>
    );
};
