import { useContext } from "react";
import OrderContext from "../../../../../../contexts/OrderContext";
import { ProductForm } from "../ProductForm";
import { UpdateFormMessage } from "./UpdateFormMessage";

const UpdateProductForm = () => {
    const { productSelected, titleInputRef, handleUpdateProduct } = useContext(OrderContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        const productBeingUpdated = {
            ...productSelected,
            [name]: value
        }

        handleUpdateProduct(productBeingUpdated)
    }

    return (
        <ProductForm
            product={productSelected}
            onChange={handleChange}
            ref={titleInputRef}
        >
            <UpdateFormMessage />
        </ProductForm>
    )
}

export default UpdateProductForm