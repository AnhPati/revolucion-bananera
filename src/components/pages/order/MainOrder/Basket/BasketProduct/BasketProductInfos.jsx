import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BasketProductLabel } from "./BasketProductLabel";
import { BasketProductQuantity } from "./BasketProductQuantity";

export const BasketProductInfos = ({ title, price, quantity, onDelete, selected, isClickable }) => {
    return (
        <BasketProductInfosStyled>
            <BasketProductLabel title={title} price={price} selected={selected} isClickable={isClickable} />
            <BasketProductQuantity quantity={quantity} onClick={onDelete} selected={selected} isClickable={isClickable} />
        </BasketProductInfosStyled>
    )
}

const BasketProductInfosStyled = styled.div`
    display: grid;
    grid-template-columns: 70% 1fr;
    margin-left: 21px;
    margin-right: ${theme.spacing.md};
`;