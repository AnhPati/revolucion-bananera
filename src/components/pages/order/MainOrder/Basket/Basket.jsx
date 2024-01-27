import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import EmptyBasket from "./EmptyBasket";
import { theme } from "../../../../../theme";
import { isEmptyArray } from "../../../../../utils/array";

export const Basket = () => {
    const { basketProducts } = useContext(OrderContext)
    const amountToPay = basketProducts.reduce((amount, product) => amount += product.quantity * product.price, 0)

    return (
        <BasketStyled>
            <BasketHeader amountToPay={amountToPay} />
            {isEmptyArray(basketProducts) ? (
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
    background: ${theme.colors.background_white};
`;