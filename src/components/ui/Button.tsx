import styled, { css } from "styled-components";
import { theme } from "@/theme/theme";
import { IconType } from "react-icons";
import { ComponentProps } from "react";

type ButtonVariant = "primary" | "success"

type ButtonProps = {
    label?: string,
    Icon?: IconType,
    variant?: ButtonVariant,
    isLoading?: boolean
} & ComponentProps<"button">

export const Button = ({ label, Icon, onClick, variant = 'primary', isLoading, ...optionalsProps }: ButtonProps) => {
    return (
        <ButtonStyled onClick={onClick} $variant={variant} $isLoading={isLoading} {...optionalsProps}>
            {label}{Icon && <Icon />}
        </ButtonStyled>
    )
}

type ButtonStyledProps = {
    $variant: ButtonVariant,
    $isLoading?: boolean
}

const ButtonStyled = styled.button<ButtonStyledProps>`
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
    ${({ $isLoading }) => $isLoading && loadingStyles}
`

const normalInteractionsStyles = css`
    &:hover {
        color: ${theme.colors.primary};
        background: ${theme.colors.white};
    }
    &:active {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
    }
`

const extraNormalStyles = css`
    width: 100%;
    padding-top: ${theme.gridUnit * 2.25}px;
    padding-bottom: ${theme.gridUnit * 2.25}px;
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    ${normalInteractionsStyles}
`

const successInteractionsStyles = css`
      &:hover {
          color: ${theme.colors.success};
          background: ${theme.colors.white};
      }
      &:active {
          color: ${theme.colors.white};
          background: ${theme.colors.success};
      }
  `

const extraSuccessStyles = css`
    padding: ${theme.gridUnit * 1.25}px 29px;
    background: ${theme.colors.success};
    border-color: ${theme.colors.success};

    ${successInteractionsStyles}
`

const loadingStyles = css<ButtonStyledProps>`
    opacity: 1!important;
    cursor: progress!important;
    ${({ $variant }) => $variant === 'primary' && normalInteractionsStyles}
    ${({ $variant }) => $variant === 'success' && successInteractionsStyles}
`

const ButtonStyles = {
    primary: extraNormalStyles,
    success: extraSuccessStyles
}