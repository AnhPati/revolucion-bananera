import styled from "styled-components";
import { BasketProduct } from "./BasketProduct";
import { DEFAULT_IMG } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";

export const BasketContent = ({ products }) => {
    const { handleDeleteBasketProduct } = useContext(OrderContext)

    const onClick = (productId) => {
        handleDeleteBasketProduct(productId)
    }

    return (
        <BasketContentStyled>
            <ul>
                {products.map(product =>
                    <BasketProduct
                        key={product.id}
                        {...product}
                        imageSource={product.imageSource.length > 0 ? product.imageSource : DEFAULT_IMG}
                        onClick={() => onClick(product.id)}
                    />)}
            </ul>
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
    flex: 1;
    display: grid;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;
    overflow-y: scroll;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        margin: 0;
        padding: 20px 16px;
    }
`;