import styled from "styled-components";

export const EmptyOrders = ({ emptyMessage = 'Aucune commande en cours.' }) => {
    return (
        <EmptyOrdersStyled>
            <h2>{emptyMessage}</h2>
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