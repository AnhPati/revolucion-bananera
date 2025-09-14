import { useState } from "react"
import { useOrderContext } from "@/contexts/OrderContext"
import { replaceFrenchCommaWithDot } from "@/utils/maths"
import { EMPTY_PRODUCT } from "@/constants/product"
import { ProductForm } from "../ProductForm/ProductForm"
import { SubmitButton } from "./SubmitButton"
import { useDisplayMessage } from "@/hooks/useDisplayMessage"
import { ProductFormData } from "@/types/Product"
import { SubmitMessageVariant } from "@/components/ui/SubmitMessage"

const AddProductForm = () => {
    const EMPTY_PRODUCT_FORM_VALUE: ProductFormData = {
        ...EMPTY_PRODUCT,
        price: EMPTY_PRODUCT.price.toString()
    }

    const [productValues, setProductValues] = useState(EMPTY_PRODUCT_FORM_VALUE)
    const [submitMessageType, setSubmitMessageType] = useState<SubmitMessageVariant>('success')
    const { handleAddProduct, userId } = useOrderContext()
    const { isSubmitting: isAdding, displayMessage } = useDisplayMessage()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target

        setProductValues({ ...productValues, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newProductPrice = productValues.price === '' ? 0 : replaceFrenchCommaWithDot(productValues.price)

        if (isNaN(newProductPrice)) {
            setProductValues({ ...productValues, price: '' })
            setSubmitMessageType('error')

        } else {
            const newProduct = {
                ...productValues,
                price: newProductPrice,
                id: crypto.randomUUID()
            }

            handleAddProduct(newProduct, userId)
            setProductValues(EMPTY_PRODUCT_FORM_VALUE)
            setSubmitMessageType('success')
        }

        displayMessage()
    }

    return (
        <ProductForm
            product={productValues}
            onSubmit={handleSubmit}
            onChange={handleChange}
        >
            <SubmitButton
                isSubmitted={isAdding}
                submitMessageType={submitMessageType}
            />
        </ProductForm>
    )
}

export default AddProductForm