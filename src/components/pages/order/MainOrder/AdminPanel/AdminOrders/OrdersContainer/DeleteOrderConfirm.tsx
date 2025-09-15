import styled from "styled-components"
import { theme } from "@/theme/theme"
import { Modal } from "@/components/ui/Modal/Modal"
import { ModalButtons } from "@/components/ui/Modal/ModalButtons"

type DeleteOrderConfirmProps = {
    orderToDelete?: string,
    onConfirm?: React.MouseEventHandler<HTMLButtonElement>,
    onCancel?: React.MouseEventHandler<HTMLButtonElement>
}

export const DeleteOrderConfirm = ({ orderToDelete, onConfirm, onCancel }: DeleteOrderConfirmProps) => {
    return (
        <Modal
            overlayColor={theme.colors.background_dark}
            overlayOpacity="70%"
            containerWidth="90%"
            containerMaxWidth="600px"
        >
            <DeleteOrderConfirmContentStyled>
                <h1>Supprimer définitivement la commande n° {orderToDelete} ?</h1>
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
    padding: 15px ${theme.spacing.md};

    h1 {
        font-size: 30px;      
        margin: 0;
        text-align: center;
    }

    p {
        font-size: ${theme.fonts.size.P1};
        margin: 0;
        text-align: center;
    }
`