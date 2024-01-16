import AdminContext from "../../../../../../contexts/AdminContext";
import { useContext } from "react";
import UpdateProductForm from "./UpdateProductForm";
import { HintMessage } from "./HintMessage";

const UpdateProductPanel = () => {
    const { productSelected } = useContext(AdminContext)
    const cardSelected = productSelected.id ? true : false

    return (
        <div>
            {cardSelected ? (
                <UpdateProductForm />
            ) : (
                <HintMessage />
            )}
        </div >
    )
}

export default UpdateProductPanel