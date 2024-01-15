import { useContext } from "react";
import AdminContext from "../../../../../../contexts/AdminContext";
import { ProductForm } from "../ProductForm";
import { UpdateFormMessage } from "./UpdateFormMessage";

const UpdateProductForm = () => {
    const { productSelected, titleInputRef, handleUpdateProduct } = useContext(AdminContext)

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