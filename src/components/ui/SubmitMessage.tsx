import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { ReactNode } from "react";

type SubmitMessagePropsType = {
    label: string,
    Icon: ReactNode,
    variant: SubmitMessageVariant
}

export const SubmitMessage = ({ label, Icon, variant }: SubmitMessagePropsType) => {
    return (
        <SubmitMessageStyled $variant={variant}>
            {Icon && Icon} {label}
        </SubmitMessageStyled>
    )
}

type SubmitMessageVariant = 'success' | 'error' | 'update'

const SubmitMessageStyled = styled.span<{ $variant: SubmitMessageVariant }>`
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding-left: 10px;
    font-size: ${theme.fonts.size.SM};

    svg {
        font-size: ${theme.fonts.size.P1};
        margin-right: 5px;
    }

    ${({ $variant }) => extraSubmitMessageStyles[$variant]}
`;

const submitSuccesStyles = css`
    color: ${theme.colors.success};
    
    svg {
        border: solid 1px ${theme.colors.success};
        border-radius: ${theme.borderRadius.circle};
    }
`

const submitErrorStyles = css`
    color: ${theme.colors.red};
`

const submitUpdateStyles = css`
    color: ${theme.colors.blue};
`

const extraSubmitMessageStyles = {
    success: submitSuccesStyles,
    error: submitErrorStyles,
    update: submitUpdateStyles
}