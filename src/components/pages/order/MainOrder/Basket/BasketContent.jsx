import styled from "styled-components";

export const BasketContent = () => {
    return (
        <BasketContentStyled>
            <h2>
                Votre commande est vide.
            </h2>
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 0;
        color: #747B91;
        font-size: 36px;
        font-weight: 400;
        line-height: 72px; 
    }
`;