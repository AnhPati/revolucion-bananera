import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const Button = ({ label, Icon, onClick, variant = 'primary', isDisabled }) => {
    return (
        <ButtonStyled onClick={onClick} $variant={variant} disabled={isDisabled} >
            {label}{Icon && Icon}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
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

    &:disabled {  
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${({ $variant }) => ButtonStyles[$variant]}
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
    padding: ${theme.gridUnit * 1.25}px 29px;
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

const ButtonStyles = {
    primary: extraNormalStyles,
    success: extraSuccessStyles
}