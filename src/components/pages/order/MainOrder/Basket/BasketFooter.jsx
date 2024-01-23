import styled from "styled-components";

export const BasketFooter = () => {
    return (
        <BasketFooterStyled>
            <h4>
                Codé avec ❤️ et React.JS
            </h4>
        </BasketFooterStyled>
    )
}

const BasketFooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background-color: #000;
    position: sticky;
    bottom: 0;

    h4 {
        margin: 0;
        color: #FFF;
        font-size: 20px;
    }
`;