import styled from "styled-components"
import { theme } from "../../../../../../../theme"
import { Modal } from "../../../../../../ui/Modal/Modal"
import { ModalButtons } from "../../../../../../ui/Modal/ModalButtons"

export const DeleteOrderConfirm = ({ onConfirm, onCancel }) => {
    return (
        <Modal
            overlayColor={theme.colors.background_dark}
            overlayOpacity="70%"
            containerWidth="90%"
            containerMaxWidth="600px"
        >
            <DeleteOrderConfirmContentStyled>
                <h1>Supprimer définitivement cette commande ?</h1>
                <p>Cette action est irréversible</p>
                <ModalButtons
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    gap="10px"
                />
            </DeleteOrderConfirmContentStyled>
        </Modal>
    )
}

const DeleteOrderConfirmContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;

    h1 {
        font-size: 30px;      
        margin: 0;
        text-align: center;
    }

    p {
        font-size: 18px;
        margin: 0;
        text-align: center;
    }
`