import { useContext, useState } from "react"
import OrderContext from "../../../../../../../contexts/OrderContext"
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths"
import { EMPTY_PRODUCT } from "../../../../../../../constants/product"
import { ProductForm } from "../ProductForm/ProductForm"
import { SubmitButton } from "./SubmitButton"
import { useDisplayMessage } from "../../../../../../../hooks/useDisplayMessage"

const AddProductForm = () => {
    const [productValues, setProductValues] = useState(EMPTY_PRODUCT)
    const [submitMessageType, setSubmitMessageType] = useState('')
    const { handleAddProduct, userId } = useContext(OrderContext)
    const { isSubmitting: isAdding, displayMessage } = useDisplayMessage()

    const handleChange = (e) => {
        const { name, value } = e.target

        setProductValues({ ...productValues, [name]: value })
    }

    const handleSubmit = (e) => {
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
            setProductValues(EMPTY_PRODUCT)
            setSubmitMessageType('success')
        }

        displayMessage()
    }

    return (
        <ProductForm
            product={productValues}
            onSubmit={handleSubmit}
            onChange={handleChange}
            isAdding={isAdding}
            submitMessageType={submitMessageType}
        >
            <SubmitButton
                isSubmitted={isAdding}
                submitMessageType={submitMessageType}
            />
        </ProductForm>
    )
}

export default AddProductForm