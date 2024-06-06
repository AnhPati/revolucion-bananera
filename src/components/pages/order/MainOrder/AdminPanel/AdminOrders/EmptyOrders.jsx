import styled from "styled-components";

export const EmptyOrders = () => {
    return (
        <EmptyOrdersStyled>
            <h2>Aucune commande en cours.</h2>
        </EmptyOrdersStyled>
    )
}

const EmptyOrdersStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    h2 {
        margin: 0;
        color: #747b91;
        font-size: 36px;
        font-weight: 400;
        text-align: center;
    }
`;