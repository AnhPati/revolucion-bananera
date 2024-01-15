import { useContext, useState } from "react"
import AdminContext from "../../../../../contexts/AdminContext"
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths"
import { EMPTY_PRODUCT } from "../../../../../enums/product"
import { ProductForm } from "./ProductForm"
import { SubmitButton } from "./SubmitButton"

const AddProductForm = () => {
    const [productValues, setProductValues] = useState(EMPTY_PRODUCT)
    const [isAdding, setIsAdding] = useState(false)
    const [submitMessageType, setSubmitMessageType] = useState('')
    const { handleAddProduct } = useContext(AdminContext)

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
                id: crypto.randomUUID()
            }

            handleAddProduct(newProduct)
            setProductValues(EMPTY_PRODUCT)
            setSubmitMessageType('success')
        }

        displayMessage()
    }

    const displayMessage = () => {
        setIsAdding(true)
        setTimeout(() => {
            setIsAdding(false)
        }, 2000)
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
                isAdding={isAdding}
                submitMessageType={submitMessageType}
            />
        </ProductForm>
    )
}

export default AddProductForm