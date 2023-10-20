import { Button, Form } from "react-bootstrap";
import { FormInput } from "../../../../../Common/Input/FormInput";
import { ButtonLoading } from "../../../../../Common/Button/ButtonLoading";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "../styles/Common.module.css";
import { useState } from "react";
import {
    FlashType,
    RegisterCredentials,
} from "../../../../../../services/types";
import { registerUser } from "../../../../../../api/requests/authentication";
import { userRole } from "./services/types";
import { useFlashContext } from "../../../../../Common/Flash";
import { logInUser } from "../../../../../../store/authentication";
import { useDispatch } from "react-redux";
import { useFlash } from "../../../../../../hooks/useFlash";

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const { authWrapper, authHeader, logInOrRegisterBar, selectMenuOptions } =
        classes;
    const form = useForm<RegisterCredentials>();
    const { handleError } = useFlash();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = form;
    const { addFlash } = useFlashContext();
    const dispatch = useDispatch();

    const formSubmitHandler = handleSubmit(
        async (data: RegisterCredentials) => {
            try {
                setLoading(true);
                const res = await registerUser(data);
                const {
                    user: { token, name, role },
                } = res;
                localStorage.setItem("token", token);
                dispatch(logInUser({ payload: { token, name, role } }));
                addFlash(
                    FlashType.SUCCESS,
                    "User has been successfully registered",
                );
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
            <Form.Group className="mt-2">
                <Form.Label>Select Role</Form.Label>
                <Form.Select
                    className={selectMenuOptions}
                    {...register("role")}
                >
                    <option value={userRole.USER}>User</option>
                    <option value={userRole.SELLER}>Seller</option>
                </Form.Select>
            </Form.Group>
            <div className={logInOrRegisterBar}>
                <Button variant="outline-light">
                    <Link to="/auth/login">Log in</Link>
                </Button>
                <ButtonLoading
                    loading={loading}
                    onClick={formSubmitHandler}
                    variant="success"
                    style={{ backgroundColor: "#41aa7f" }}
                >
                    Register
                </ButtonLoading>
            </div>
        </div>
    );
};
