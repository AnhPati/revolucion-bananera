import { theme } from "@/theme/theme";
import styled from "styled-components";

export const EmptyOrders = ({ emptyMessage = 'Aucune commande en cours.' }) => {
    return (
        <EmptyOrdersStyled>
            <h2>{emptyMessage}</h2>
        </EmptyOrdersStyled>
    )
}

const EmptyOrdersStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    h2 {
        margin: 0;
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        text-align: center;
    }
`;