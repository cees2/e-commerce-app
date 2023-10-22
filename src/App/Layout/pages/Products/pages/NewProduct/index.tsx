import { useForm } from "react-hook-form";
import { FormInput } from "../../../../../Common/Input/FormInput";
import { NewProductApi } from "../../services/types";
import { FormDirty } from "../../../../../Common/Input/FormDirty";
import { TextareaInput } from "../../../../../Common/Input/TextareaInput";
import { ImageUpload } from "../../../../../Common/Input/ImageUpload";

export const NewProduct = () => {
    const form = useForm<NewProductApi>();
    const {
        register,
        formState: { errors },
        formState,
        handleSubmit,
    } = form;

    const onSubmit = handleSubmit((data: NewProductApi) => {
        console.log(data);
    });

    return (
        <FormDirty
            formState={formState}
            cancelPathRedirect="/"
            onSubmit={onSubmit}
        >
            <>
                <div className="row">
                    <div className="col-md-12">
                        <h4>Add new product</h4>
                        <small>Fields marked with * are required</small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <FormInput
                            register={register}
                            name="name"
                            errors={errors}
                            label="Product name *"
                        />
                    </div>
                    <div className="col-sm-6">
                        <FormInput
                            label="Product price *"
                            register={register}
                            name="price"
                            errors={errors}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <TextareaInput
                            label="Opis produktu *"
                            name="description"
                            register={register}
                        />
                    </div>
                    <div className="col-sm-6">
                        <ImageUpload
                            name="images"
                            register={register}
                            label="Images"
                        />
                    </div>
                </div>
            </>
        </FormDirty>
    );
};
