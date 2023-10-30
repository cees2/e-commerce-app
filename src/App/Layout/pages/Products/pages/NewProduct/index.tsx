import { useForm } from "react-hook-form";
import { FormInput } from "../../../../../Common/Input/FormInput";
import { NewProductApi } from "../../services/types";
import { FormDirty } from "../../../../../Common/Input/FormDirty";
import { TextareaInput } from "../../../../../Common/Input/TextareaInput";
import { ImageUpload } from "../../../../../Common/Input/ImageUpload";
import { useFlash } from "../../../../../../hooks/useFlash";
import { createProduct } from "../../../../../../api/requests/products";
import { useSelector } from "react-redux";
import { selectToken } from "../../../../../../store/authentication/selectors";

export const NewProduct = () => {
    const form = useForm<NewProductApi>();
    const {
        register,
        formState: { errors },
        formState,
        handleSubmit,
        setError,
        control,
    } = form;
    const { handleError } = useFlash();
    const token = useSelector(selectToken);

    const onSubmit = handleSubmit(async (data: NewProductApi) => {
        try {
            const formData = new FormData();
            // const imagesArray = Array.from(data.images);
            // imagesArray.forEach((image) => formData.append("images", image));
            formData.append("images", data.images[0]);
            data.images = formData;
            // console.log(formData);
            console.log(token);
            await createProduct(data, token);
        } catch (err) {
            handleError(err, { flash: true, form: true, setError });
        }
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
                            type="number"
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
                            control={control}
                            isMultiple
                        />
                    </div>
                </div>
            </>
        </FormDirty>
    );
};
