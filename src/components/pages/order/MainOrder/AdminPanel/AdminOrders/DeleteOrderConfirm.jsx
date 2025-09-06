import styled from "styled-components"
import { Button } from "../../../../../ui/Button"
import { theme } from "../../../../../../theme"

export const DeleteOrderConfirm = ({ orderToDelete, onConfirm, onCancel }) => {
    return (
        <DeleteOrderConfirmStyled>
            <div className="delete-order-layer"></div>
            <div className="delete-order-container">
                <h1>Supprimer définitivement cette commande ?</h1>
                <p>Cette action est irréversible</p>
                <div className="buttons-container">
                    <Button label="Confirmer" onClick={onConfirm} />
                    <Button label="Annuler" onClick={onCancel} />
                </div>
            </div>
        </DeleteOrderConfirmStyled>
    )
}

const DeleteOrderConfirmStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    z-index: 3;

    .delete-order-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${theme.colors.background_dark};
        opacity: 70%;
    }

    .delete-order-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        padding: 15px 20px;
        border-radius: 5px;
        background: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
        z-index: 1;
        width: 90%;
        max-width: 600px;

        h1 {
            font-size: 30px;         // Plus petit       
            margin: 0;
        }

        p {
            font-size: 18px;
            margin: 0;
        }

        .buttons-container {
            display: flex;
            justify-content: center;
            gap: 10px;

            button {
                width: 95px;
            }
        }
    }
`