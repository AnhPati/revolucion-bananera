import AdminContext from "../../../../../../contexts/AdminContext";
import { useContext } from "react";
import UpdateProductForm from "./UpdateProductForm";
import { HintMessage } from "./HintMessage";

const UpdateProductPanel = () => {
    const { adminMode } = useContext(AdminContext)
    const cardSelected = adminMode.adminPanel.cardSelected

    return (
        <div>
            {cardSelected ? (
                <UpdateProductForm productId={cardSelected} />
            ) : (
                <HintMessage />
            )}
        </div >
    )
}

export default UpdateProductPanel