import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BasketProductLabel } from "./BasketProductLabel";
import { BasketProductQuantity } from "./BasketProductQuantity";

export const BasketProductInfos = ({ title, price, quantity, onDelete }) => {
    return (
        <BasketProductInfosStyled>
            <BasketProductLabel title={title} price={price} />
            <BasketProductQuantity quantity={quantity} onClick={onDelete} />
        </BasketProductInfosStyled>
    )
}

const BasketProductInfosStyled = styled.div`
    display: grid;
    grid-template-columns: 70% 1fr;
    margin-left: 21px;
    margin-right: ${theme.spacing.md};
`;