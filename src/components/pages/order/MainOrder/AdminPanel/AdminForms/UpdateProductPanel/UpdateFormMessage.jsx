import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export const UpdateFormMessage = () => {
    return (
        <UpdateFormMessageStyled>
            Cliquer sur un produit du menu pour le modifier <u>en temps réel</u>
        </UpdateFormMessageStyled>
    )
}

const UpdateFormMessageStyled = styled.span`
        color: ${theme.colors.primary};
        padding: ${theme.gridUnit * 0.75}px 0;
        font-size: ${theme.fonts.size.SM};
`;