import { useNavigate } from "react-router-dom";
import { ButtonLoading } from "../Button/ButtonLoading";
import { Button, Form } from "react-bootstrap";
import { ButtonType } from "../services/types";
import classes from "../styles/FormDirty.module.css";

interface Props {
    cancelPathRedirect: string;
    children: JSX.Element;
    formState: Record<string, any>;
    onSubmit: (data: any) => void;
}

export const FormDirty = (props: Props) => {
    const { cancelPathRedirect, children, formState, onSubmit } = props;
    const { isDirty, isLoading } = formState;
    const navigate = useNavigate();
    const { formDirtyButtonsWrapper } = classes;

    const onCancel = () => {
        navigate(cancelPathRedirect);
    };

    return (
        <Form onSubmit={onSubmit}>
            <div className="container">
                {children}
                {isDirty && (
                    <div className={formDirtyButtonsWrapper}>
                        <Button onClick={onCancel} variant="light">
                            Cancel
                        </Button>
                        <ButtonLoading
                            loading={isLoading}
                            type={ButtonType.SUBMIT}
                            variant="primary"
                        >
                            Save
                        </ButtonLoading>
                    </div>
                )}
            </div>
        </Form>
    );
};
