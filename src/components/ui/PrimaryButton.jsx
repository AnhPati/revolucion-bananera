import styled from "styled-components";
import { theme } from "../../theme";

export const PrimaryButton = ({ label, Icon }) => {
    return (
        <PrimaryButtonStyled>{label}{Icon && Icon}</PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    padding-top: ${theme.gridUnit * 2.25}px;
    padding-bottom: ${theme.gridUnit * 2.25}px;
    color: ${theme.colors.white};
    font-weight: ${theme.fonts.weights.bold};
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
    transition: background-color 0.4s ;

    > svg {
        margin-bottom: ${theme.gridUnit * (-0.25)}px;
        margin-left: ${theme.gridUnit * 1.25}px;
    }

    &:hover {
        color: ${theme.colors.primary};
        background: ${theme.colors.white};
    }

    &:focus {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        transition: none;
    }
`;