import { useState } from "react";
import { useOrderContext } from "../../../../../../../contexts/OrderContext";
import { ProductForm } from "../ProductForm/ProductForm";
import { UpdateFormMessage } from "./UpdateFormMessage";
import { useDisplayMessage } from "../../../../../../../hooks/useDisplayMessage";
import { SubmitMessage } from "../../../../../../ui/SubmitMessage"
import { BsCloudCheck } from "react-icons/bs";

const UpdateProductForm = () => {
    const { productSelected, titleInputRef, handleUpdateProduct, userId } = useOrderContext()
    const [valueOnFocus, setValueOnFocus] = useState(null)
    const { isSubmitting: isUpdating, displayMessage } = useDisplayMessage()

    const handleChange = (e) => {
        const { name, value } = e.target
        const productBeingUpdated = {
            ...productSelected,
            [name]: value
        }

        handleUpdateProduct(productBeingUpdated, userId)
    }

    const onFocus = (event) => {
        const inputValue = event.target.value
        setValueOnFocus(inputValue)
    }

    const onBlur = (event) => {
        const valueOnBlur = event.target.value

        if (valueOnBlur !== valueOnFocus) {
            displayMessage()
        }
    }

    return (
        <ProductForm
            product={productSelected}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={titleInputRef}
        >
            {isUpdating ? (
                <SubmitMessage
                    label={'Modifications enregistrées !'}
                    Icon={BsCloudCheck}
                    variant={'update'}
                />

            ) : (
                <UpdateFormMessage />
            )}
        </ProductForm>
    )
}

export default UpdateProductForm