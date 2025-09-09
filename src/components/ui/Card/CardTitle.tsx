import styled from "styled-components";
import { theme } from "@/theme/theme";

type CardTitleProps = {
    title: string
}

export const CardTitle = ({ title }: CardTitleProps) => {
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