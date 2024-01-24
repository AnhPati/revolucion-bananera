import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";

export const Basket = () => {
    const { basketProducts } = useContext(OrderContext)
    const amountToPay = basketProducts.reduce((amount, product) => amount += product.quantity * product.price, 0)

    return (
        <BasketStyled>
            <BasketHeader amountToPay={amountToPay} />
            <BasketContent products={basketProducts} />
            <BasketFooter />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background: #F5F5F7;
`;