import { useState } from "react";
import classes from "../styles/Common.module.css";
import { FormInput } from "../../../../Common/Input/FormInput";
import { useForm } from "react-hook-form";
import { ButtonLoading } from "../../../../Common/Button/ButtonLoading";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FlashType, LogInCredentials } from "../../../../../services/types";
import { loginUser } from "../../../../../api/requests/authentication";
import { useFlashContext } from "../../../../Common/Flash";
import { useFlash } from "../../../../../hooks/useFlash";

export const LogIn = () => {
    const [loading, setLoading] = useState(false);
    const { authWrapper, authHeader, logInOrRegisterBar } = classes;
    const form = useForm<LogInCredentials>();
    // const navigate = useNavigate();
    const { addFlash } = useFlashContext();
    const { handleError } = useFlash();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = form;

    const formSubmitHandler = handleSubmit(async (data: LogInCredentials) => {
        setLoading(true);
        try {
            const res = await loginUser(data);
            localStorage.setItem("token", res.token);
            addFlash(FlashType.SUCCESS, "User has been successfully logged in");
            // navigate("/");
        } catch (err: any) {
            handleError(err, { flash: true });
        }
        setLoading(false);
    });

    return (
        <div className={authWrapper}>
            <h3 className={authHeader}>Log in</h3>
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
                className="mt-2"
                errors={errors}
            />
            <div className={logInOrRegisterBar}>
                <Link to="/auth/register">
                    <Button variant="outline-light">Register</Button>
                </Link>
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
