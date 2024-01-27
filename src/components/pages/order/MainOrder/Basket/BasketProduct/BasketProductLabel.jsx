import styled, { css } from "styled-components";
import { formatPrice } from "../../../../../../utils/maths";
import { theme } from "../../../../../../theme";

export const BasketProductLabel = ({ title, price, selected, isClickable }) => {
    return (
        <BasketProductLabelStyled $selected={selected} $isClickable={isClickable}>
            <h5>{title}</h5>
            <p>{formatPrice(price)}</p>
        </BasketProductLabelStyled>
    )
}

const BasketProductLabelStyled = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    padding: 5px 0 8px 0;
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
    }

    ${({ $selected, $isClickable }) => $selected && $isClickable && selectedStyles}
`;

const selectedStyles = css`
    h5 {
        color: ${theme.colors.dark};
    }

    p {
        color: ${theme.colors.white};
    }
`