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
        font-size: 18px;
        border: solid 1px ${theme.colors.success};
        border-radius: 50%;
        margin-right: 5px;
    }

    ${({ $variant }) => extraSubmitMessageStyles[$variant]}
`;

const submitSuccesStyles = css`
    color: ${theme.colors.success};
`

const submitErrorStyles = css`
    color: ${theme.colors.red};
`

const extraSubmitMessageStyles = {
    succes: submitSuccesStyles,
    error: submitErrorStyles
}