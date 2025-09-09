import styled from "styled-components";
import { Button } from "../Button"

type ModalButtonsProps = {
    onConfirm?: React.MouseEventHandler<HTMLButtonElement>,
    onCancel?: React.MouseEventHandler<HTMLButtonElement>,
} & Partial<ModalButtonsStyledProps>

export const ModalButtons = ({ onConfirm, onCancel, gap = '20px' }: ModalButtonsProps) => {
    return (
        <ModalButtonsStyled gap={gap}>
            <Button label="Confirmer" onClick={onConfirm} />
            <Button label="Annuler" onClick={onCancel} />
        </ModalButtonsStyled>
    )
}

type ModalButtonsStyledProps = {
    gap: string
}

const ModalButtonsStyled = styled.div<ModalButtonsStyledProps>`
        display: flex;
        justify-content: center;
        gap: ${props => props.gap};

        button {
            width: 95px;
        }
`;