import styled from "styled-components";
import { theme } from "../../../../../theme";

export const BasketFooter = () => {
    return (
        <BasketFooterStyled>
            <h4>
                Codé avec ❤️ et React.JS
            </h4>
        </BasketFooterStyled>
    )
}

const BasketFooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background-color: ${theme.colors.background_dark};

    h4 {
        margin: 0;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P2};
    }
`;