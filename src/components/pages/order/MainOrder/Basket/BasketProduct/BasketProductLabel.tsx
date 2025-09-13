import styled, { css } from "styled-components";
import { theme } from "@/theme/theme";

type BasketProductLabelProps = {
    title?: string,
    price?: string,
    isSelected?: boolean,
    isClickable?: boolean
}

export const BasketProductLabel = ({ title, price, isSelected, isClickable }: BasketProductLabelProps) => {
    return (
        <BasketProductLabelStyled $isSelected={isSelected} $isClickable={isClickable}>
            <h5>{title}</h5>
            <p>{price}</p>
        </BasketProductLabelStyled>
    )
}

type BasketProductLabelStyledProps = {
    $isSelected?: boolean,
    $isClickable?: boolean
}

const BasketProductLabelStyled = styled.div<BasketProductLabelStyledProps>`
    display: grid;
    grid-template-rows: 60% 40%;
    padding: 5px 0 ${theme.spacing.xs} 0;
    gap: 5px;

    h5 {
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.size.P3};
    }

    p {
        margin: 0;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.SM};
        white-space: nowrap;
    }

    ${({ $isSelected, $isClickable }) => $isSelected && $isClickable && selectedStyles}
`;

const selectedStyles = css`
    p {
        color: ${theme.colors.white};
    }
`