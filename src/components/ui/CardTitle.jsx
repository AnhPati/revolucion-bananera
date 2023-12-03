import styled from "styled-components";

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
    color: #17161A;
    font-size: 36px;
    font-weight: 700;
    text-align: start;
`;