import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BasketProductLabel } from "./BasketProductLabel";
import { BasketProductQuantity } from "./BasketProductQuantity";

export const BasketProductInfos = ({ title, price, quantity, onDelete, selected }) => {
    return (
        <BasketProductInfosStyled>
            <BasketProductLabel title={title} price={price} selected={selected} />
            <BasketProductQuantity quantity={quantity} onClick={onDelete} selected={selected} />
        </BasketProductInfosStyled>
    )
}

const BasketProductInfosStyled = styled.div`
    display: grid;
    grid-template-columns: 70% 1fr;
    margin-left: 21px;
    margin-right: ${theme.spacing.md};
`;