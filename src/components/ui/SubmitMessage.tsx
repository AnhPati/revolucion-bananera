import styled, { css } from "styled-components";
import { theme } from "../../theme";

export const SubmitMessage = ({ label, Icon, variant }) => {
    return (
        <SubmitMessageStyled $variant={variant}>
            {Icon && Icon} {label}
        </SubmitMessageStyled>
    )
}

const SubmitMessageStyled = styled.span`
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