import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";

export const BasketHeader = ({ amountToPay }) => {
    return (
        <BasketHeaderStyled>
            <h3>
                Total
            </h3>
            <h3>
                {formatPrice(amountToPay)}
            </h3>
        </BasketHeaderStyled>
    )
}

const BasketHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    height: 70px;
    background-color: ${theme.colors.dark};

    h3 {
        margin: 0;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        letter-spacing: 2px;
    }
`;