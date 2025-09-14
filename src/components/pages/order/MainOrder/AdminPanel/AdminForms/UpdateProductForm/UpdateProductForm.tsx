import { useState } from "react";
import { useOrderContext } from "@/contexts/OrderContext";
import { ProductForm } from "../ProductForm/ProductForm";
import { UpdateFormMessage } from "./UpdateFormMessage";
import { useDisplayMessage } from "@/hooks/useDisplayMessage";
import { SubmitMessage } from "@/components/ui/SubmitMessage";
import { BsCloudCheck } from "react-icons/bs";
import { ProductFormData } from "@/types/Product";

const UpdateProductForm = () => {
    const { productSelected, titleInputRef, handleUpdateProduct, userId } = useOrderContext()
    const [valueOnFocus, setValueOnFocus] = useState<string | null>(null)
    const { isSubmitting: isUpdating, displayMessage } = useDisplayMessage()

    const productFormSelected: ProductFormData | undefined = productSelected ? {
        ...productSelected,
        price: productSelected.price.toString()
    } : undefined
    if (!productFormSelected) return null

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        const productBeingUpdated = {
            ...productSelected,
            [name]: value
        }

        handleUpdateProduct(productBeingUpdated, userId)
    }

    const onFocus = (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const inputValue = event.target.value
        setValueOnFocus(inputValue)
    }

    const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const valueOnBlur = event.target.value

        if (valueOnBlur !== valueOnFocus) {
            displayMessage()
        }
    }

    return (
        <ProductForm
            product={productFormSelected}
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