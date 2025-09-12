import { MdDeleteForever } from "react-icons/md";
import styled, { css } from "styled-components";
import { theme } from "@/theme/theme";
import { CasinoEffect } from "@/components/ui/CasinoEffect";

type BasketProductQuantityProps = {
    quantity: number,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    selected?: boolean,
    isClickable?: boolean,
    isAvailable?: boolean
}

export const BasketProductQuantity = ({ quantity, onClick, selected, isClickable, isAvailable }: BasketProductQuantityProps) => {
    return (
        <BasketProductQuantityStyled className="basket-product_quantity" onClick={onClick} $isSelected={selected} $isClickable={isClickable}>
            {isAvailable && <CasinoEffect count={`x${quantity}`} />}
            <MdDeleteForever />
        </BasketProductQuantityStyled>
    )
}

type BasketProductQuantityStyledProps = {
    $isSelected?: boolean,
    $isClickable?: boolean
}

const BasketProductQuantityStyled = styled.div<BasketProductQuantityStyledProps>`
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

    ${({ $isSelected, $isClickable }) => $isSelected && $isClickable && selectedStyles}
`;

const selectedStyles = css`
    span {
        color: ${theme.colors.white};
    }
`