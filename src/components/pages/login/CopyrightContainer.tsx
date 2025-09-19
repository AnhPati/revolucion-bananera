import { theme } from "@/theme/theme";
import styled from "styled-components";

export const CopyrightContainer = () => {
    return (
        <CopyrightContainerStyled>
            <p>© 2025 Groovy Burger — Tous droits réservés</p>
            <p>Made with ❤️</p>
        </CopyrightContainerStyled>
    )
}

const CopyrightContainerStyled = styled.div`
    width: 100%;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;

    p {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.regular};
        margin: 0;
    }
`;