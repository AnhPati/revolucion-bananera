import styled from "styled-components";
import { theme } from "@/theme/theme";
import { BasketProductLabel } from "./BasketProductLabel";
import { BasketProductQuantity } from "./BasketProductQuantity";

type BasketProductInfosProps = {
    title?: string,
    price: string,
    quantity: number,
    onDelete?: React.MouseEventHandler<HTMLDivElement>,
    isSelected?: boolean,
    isClickable?: boolean,
    isUnavailable?: boolean
}

export const BasketProductInfos = ({ title, price, quantity, onDelete, isSelected, isClickable, isUnavailable }: BasketProductInfosProps) => {
    return (
        <BasketProductInfosStyled>
            <BasketProductLabel title={title} price={price} isSelected={isSelected} isClickable={isClickable} />
            <BasketProductQuantity quantity={quantity} onClick={onDelete} isSelected={isSelected} isClickable={isClickable} isAvailable={!isUnavailable} />
        </BasketProductInfosStyled>
    )
}

const BasketProductInfosStyled = styled.div`
    display: grid;
    grid-template-columns: 70% 1fr;
    margin-left: 21px;
    margin-right: ${theme.spacing.md};
`;