import styled from "styled-components";
import { theme } from "../../theme";

export const PrimaryButton = ({ label, Icon }) => {
    return (
        <PrimaryButtonStyled>{label} {Icon && Icon}</PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    padding-top: 18px;
    padding-bottom: 18px;
    color: ${theme.colors.white};
    font-weight: ${theme.weights.bold};
    background: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    cursor: pointer;

    > svg {
        margin-bottom: -2px;
    }

    &:hover {
        color: ${theme.colors.primary_burger};
        background: ${theme.colors.white};
    }

    &:focus {
        color: ${theme.colors.white};
        background: ${theme.colors.primary_burger};
    }
`;