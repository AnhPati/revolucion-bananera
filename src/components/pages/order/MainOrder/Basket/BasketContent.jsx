import styled from "styled-components";
import { BasketProduct } from "./BasketProduct";

export const BasketContent = ({ products }) => {
    return (
        <BasketContentStyled>
            {products.length > 0 ? (
                <BasketProduct />
            ) : (
                <h2>
                    Votre commande est vide.
                </h2>
            )}
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;

    h2 {
        margin: 0;
        color: #747B91;
        font-size: 36px;
        font-weight: 400;
        line-height: 72px; 
    }
`;