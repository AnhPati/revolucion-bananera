import styled from "styled-components";
import { HiCursorClick } from 'react-icons/hi'
import { theme } from "../../../../../../../theme";

export const HintMessage = () => {
    return (
        <HintMessageStyled>
            Cliquer sur un produit pour le modifier <HiCursorClick />
        </HintMessageStyled>
    )
}

const HintMessageStyled = styled.h2`
    margin-top: 49px;
    color: ${theme.colors.greyBlue};
    font-weight: ${theme.fonts.weights.regular};

    svg {
        margin-bottom: -3.195px;
        margin-left: 3.875px;
    }
`;