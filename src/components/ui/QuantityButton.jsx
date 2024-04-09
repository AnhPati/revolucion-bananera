import styled from "styled-components";
import { theme } from "../../theme";

export const QuantityButton = ({ onAdd, onRemove, quantity, isDisabled }) => {
    console.log(quantity)
    return (
        <QuantityButtonStyled>
            <button className='decrement-button' onClick={onRemove} disabled={quantity < 1 || isDisabled ? true : false} >-</button>
            <p>{quantity}</p>
            <button className='increment-button' onClick={onAdd} disabled={isDisabled} >+</button>
        </QuantityButtonStyled>
    )
}

const QuantityButtonStyled = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;

    button {
        background: ${theme.colors.primary};
        padding-top: ${theme.gridUnit * 1.5}px;
        padding-bottom: ${theme.gridUnit * 1.5}px;
        border-color: ${theme.colors.primary};
        border-style: solid;
        border-width: 1px;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.bold};
        cursor: pointer;
        transition: background-color 0.4s ;

        &.decrement-button {
            border-radius: ${theme.borderRadius.round} 0 0 ${theme.borderRadius.round};
        }

        &.increment-button {
            border-radius: 0 ${theme.borderRadius.round} ${theme.borderRadius.round} 0;
        }

        &:hover {
            color: ${theme.colors.primary};
            background: ${theme.colors.white};
        }

        &:active {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            transition: none;
        }

        &:disabled {  
            cursor: not-allowed;
            opacity: 0.3;
        }
    }

    p {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.bold};
        margin: 0;
    }
`;