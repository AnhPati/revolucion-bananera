import styled from "styled-components";
import { theme } from "../../../../../theme";

export const SubmitMessage = ({ label, Icon }) => {
    return (
        <SubmitMessageStyled className="succes-message">
            {Icon && Icon} {label}
        </SubmitMessageStyled>
    )
}

const SubmitMessageStyled = styled.span`
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding-left: 10px;
    color: ${theme.colors.success};
    font-size: ${theme.fonts.size.SM};

    svg {
        font-size: 18px;
        border: solid 1px ${theme.colors.success};
        border-radius: 50%;
        margin-right: 5px;
    }
`;