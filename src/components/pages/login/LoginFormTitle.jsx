import styled from "styled-components";
import { theme } from "../../../theme";

export const LoginFormTitle = () => {
    return (
        <>
            <TitlePrimaryStyled>Bienvenue chez nous !</TitlePrimaryStyled>
            <TitleSeparationStyled />
            <TitleSecondaryStyled>Connectez-vous :</TitleSecondaryStyled>
        </>
    )
}

const TitlePrimaryStyled = styled.h1`
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weights.bold};
`

const TitleSecondaryStyled = styled.h2`
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    margin-bottom: ${theme.spacing.sm};
`

const TitleSeparationStyled = styled.hr`
    width: 100%;
    border: solid 1.5px ${theme.colors.loginLine};
`