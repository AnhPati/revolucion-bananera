import styled from "styled-components";
import { HiCursorClick } from 'react-icons/hi'
import AdminContext from "../../../../../../contexts/AdminContext";
import { useContext } from "react";
import UpdateProductForm from "./UpdateProductForm";

const UpdateProductPanel = () => {
    const { adminMode } = useContext(AdminContext)
    const cardSelected = adminMode.adminPanel.cardSelected

    return (
        <UpdateProductPanelStyled>
            {cardSelected ? (
                <UpdateProductForm productId={cardSelected} />
            ) : (
                <h2>Cliquer sur un produit pour le modifier <HiCursorClick /></h2>
            )
            }
        </UpdateProductPanelStyled >
    )
}

export default UpdateProductPanel

const UpdateProductPanelStyled = styled.div`
    h2 {
        margin-top: 49px;
        color: #747B91;
        font-weight: 400;

        svg {
            margin-bottom: -3.195px;
            margin-left: 3.875px;
        }
    }
`;