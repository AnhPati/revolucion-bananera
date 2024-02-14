import { MdDeleteForever } from "react-icons/md";
import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import { CasinoEffect } from "../../../../../ui/CasinoEffect";

export const BasketProductQuantity = ({ quantity, onClick, selected, isClickable, isAvailable }) => {
    return (
        <BasketProductQuantityStyled className="basket-product_quantity" onClick={onClick} $selected={selected} $isClickable={isClickable}>
            {isAvailable && <CasinoEffect count={`x${quantity}`} />}
            <MdDeleteForever />
        </BasketProductQuantityStyled>
    )
}

const BasketProductQuantityStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.SM};
    }

    svg {
        display: none;
    }

    ${({ $selected, $isClickable }) => $selected && $isClickable && selectedStyles}
`;

const selectedStyles = css`
    span {
        color: ${theme.colors.white};
    }
`