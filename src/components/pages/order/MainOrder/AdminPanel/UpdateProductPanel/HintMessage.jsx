import styled from "styled-components";
import { HiCursorClick } from 'react-icons/hi'

export const HintMessage = () => {
    return (
        <HintMessageStyled>
            Cliquer sur un produit pour le modifier <HiCursorClick />
        </HintMessageStyled>
    )
}

const HintMessageStyled = styled.h2`
    margin-top: 49px;
    color: #747B91;
    font-weight: 400;

    svg {
        margin-bottom: -3.195px;
        margin-left: 3.875px;
    }
`;