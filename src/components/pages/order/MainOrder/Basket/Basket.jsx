import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import EmptyBasket from "./EmptyBasket";

export const Basket = () => {
    const { basketProducts } = useContext(OrderContext)
    const amountToPay = basketProducts.reduce((amount, product) => amount += product.quantity * product.price, 0)
    const isEmptyBasket = basketProducts.length === 0

    return (
        <BasketStyled>
            <BasketHeader amountToPay={amountToPay} />
            {isEmptyBasket ? (
                <EmptyBasket />
            ) : (
                <BasketContent products={basketProducts} />
            )}
            <BasketFooter />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;
    background: #F5F5F7;
`;