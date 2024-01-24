import styled from "styled-components";
import { BasketProduct } from "./BasketProduct";
import { DEFAULT_IMG } from "../../../../../enums/product";

export const BasketContent = ({ products }) => {
    return (
        <BasketContentStyled>
            {products.length > 0 ? (
                <ul>
                    {products.map(product =>
                        <BasketProduct
                            key={product.id}
                            {...product}
                            imageSource={product.imageSource.length > 0 ? product.imageSource : DEFAULT_IMG}
                        />)}
                </ul>
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
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;
    overflow: hidden;

    ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        margin: 0;
        padding: 20px 16px;
        overflow-y: scroll;
    }

    h2 {
        margin: 0;
        color: #747B91;
        font-size: 36px;
        font-weight: 400;
        line-height: 72px; 
    }
`;