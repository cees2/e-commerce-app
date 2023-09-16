import { useState } from "react";
import classes from "../../styles/LogIn.module.css";
import { FormInput } from "../../../../../Common/Input/FormInput";
import { useForm } from "react-hook-form";
import { ButtonLoading } from "../../../../../Common/Button/ButtonLoading";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface LogInCredentials {
    email: string;
    password: string;
}

export const LogIn = () => {
    const [loading, setLoading] = useState(false);
    const { logInWrapper, logInHeader, logInAndRegisterBar } = classes;
    const form = useForm<LogInCredentials>();

    const { register, handleSubmit } = form;

    const formSubmitHandler = handleSubmit((data: LogInCredentials) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    });

    return (
        <div className={logInWrapper}>
            <h3 className={logInHeader}>Log in</h3>
            <FormInput
                type="email"
                name="email"
                label="Email"
                register={register}
            />
            <FormInput
                type="password"
                name="password"
                label="Password"
                register={register}
                className="mt-2"
            />
            <div className={logInAndRegisterBar}>
                <Button variant="outline-light">
                    <Link to="/auth/register">Register</Link>
                </Button>
                <ButtonLoading
                    loading={loading}
                    onClick={formSubmitHandler}
                    variant="success"
                >
                    Log in
                </ButtonLoading>
            </div>
        </div>
    );
};
