import styled from "styled-components";
import { Button } from "../Button"

export const ModalButtons = ({ onConfirm, onCancel, gap = '20px' }) => {
    return (
        <ModalButtonsStyled gap={gap}>
            <Button label="Confirmer" onClick={onConfirm} />
            <Button label="Annuler" onClick={onCancel} />
        </ModalButtonsStyled>
    )
}

const ModalButtonsStyled = styled.div`
        display: flex;
        justify-content: center;
        gap: ${props => props.gap};

        button {
            width: 95px;
        }
`;