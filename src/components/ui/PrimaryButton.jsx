import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const PrimaryButton = ({ label, Icon, onClick, variant = 'normal' }) => {
    return (
        <PrimaryButtonStyled onClick={onClick} $variant={variant}>
            {label}{Icon && Icon}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.button`
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    font-weight: ${theme.fonts.weights.bold};
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    transition: background-color 0.4s ;

    > svg {
        margin-bottom: ${theme.gridUnit * (-0.25)}px;
        margin-left: ${theme.gridUnit * 1.25}px;
    }

    &:active {
        color: ${theme.colors.white};
        transition: none;
    }

    ${({ $variant }) => primaryButtonStyles[$variant]}
`;

const extraNormalStyles = css`
    width: 100%;
    padding-top: ${theme.gridUnit * 2.25}px;
    padding-bottom: ${theme.gridUnit * 2.25}px;
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover {
        color: ${theme.colors.primary};
        background: ${theme.colors.white};
    }

    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
    }
`

const extraSuccessStyles = css`
    width: 275.25px;
    height: auto;
    padding-top: ${theme.gridUnit * 1.25}px;
    padding-bottom: ${theme.gridUnit * 1.25}px;
    background: ${theme.colors.success};
    border-color: ${theme.colors.success};

    &:hover {
        color: ${theme.colors.success};
        background: ${theme.colors.white};
    }

    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.success};
    }
`

const primaryButtonStyles = {
    normal: extraNormalStyles,
    success: extraSuccessStyles
}