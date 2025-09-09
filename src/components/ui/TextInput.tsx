import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";
import { ComponentPropsWithRef, forwardRef } from "react";
import { IconType } from "react-icons";

type TextInputVariant = "primary" | "secondary"

type TextInputProps = {
    Icon: IconType,
    variant?: TextInputVariant
} & ComponentPropsWithRef<"input">

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
    value,
    onChange,
    Icon,
    className = '',
    variant = 'primary',
    ...optionalsProps }, ref) => {
    return (
        <TextInputStyled className={className} $variant={variant}>
            {Icon && <Icon />}
            <input
                value={value}
                onChange={onChange}
                type="text"
                {...optionalsProps}
                ref={ref}
            />
        </TextInputStyled>
    )
})
TextInput.displayName = "TextInput";

type TextInputStyledProps = {
    $variant: TextInputVariant
}

const TextInputStyled = styled.div<TextInputStyledProps>`
    position: relative;
    width: 100%;

    > svg {
        position: absolute;
        left: ${theme.gridUnit * 2.5}px;
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.SM};
    }

    input {
        width: 100%;
        color: ${theme.colors.dark};
        font-weight: ${theme.fonts.weights.regular};
        padding-left: ${theme.gridUnit * 5.75}px;
        padding-right: ${theme.gridUnit * 3}px;
        border: none;
        border-radius: ${theme.borderRadius.round};

        &:focus-visible {
            outline: none;

            &::placeholder {
                color: transparent;
            }
        }
    }

    ${({ $variant }) => inputStyles[$variant]}
`;

const extraPrimaryStyles = css`
    margin: ${theme.spacing.sm} 0;

    > svg {
        top: ${theme.gridUnit * 2.25}px;
    }

    input {
        padding-top: ${theme.gridUnit * 2.25}px;
        padding-bottom: ${theme.gridUnit * 2.25}px;

        &::placeholder {
            color: ${theme.colors.greyUltraLight};
        }

        &:focus-visible {
            outline: none;
        }
    }
`

const extraSecondaryStyles = css`
    margin: 0;
    background: ${theme.colors.background_white};

    > svg {
        top: ${theme.gridUnit}px;
    }

    input {
        background: ${theme.colors.background_white};
        font-size: ${theme.fonts.size.SM};
        padding-top: ${theme.gridUnit}px;
        padding-bottom: ${theme.gridUnit}px;

        &::placeholder {
            color:  ${theme.colors.greyMedium};
        }

        &:focus-visible {
        }
    }
`

const inputStyles = {
    primary: extraPrimaryStyles,
    secondary: extraSecondaryStyles
}