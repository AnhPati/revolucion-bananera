import styled from "styled-components";
import { theme } from "../../../theme";

export const CardTitle = ({ title }) => {
    return (
        <CardTitleStyled>
            {title}
        </CardTitleStyled>
    )
}

const CardTitleStyled = styled.h3`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 15px 0 0 0;
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    text-align: start;
`;