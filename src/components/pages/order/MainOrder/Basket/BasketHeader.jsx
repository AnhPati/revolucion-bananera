import styled from "styled-components";

export const BasketHeader = () => {
    return (
        <BasketHeaderStyled>
            <h3>
                Total
            </h3>
            <h3>
                0,00 €
            </h3>
        </BasketHeaderStyled>
    )
}

const BasketHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    height: 70px;
    background-color: #000;

    h3 {
        margin: 0;
        color: #FFA01B;
        font-size: 36px;
        font-weight: 400;
        letter-spacing: 2px;
    }
`;