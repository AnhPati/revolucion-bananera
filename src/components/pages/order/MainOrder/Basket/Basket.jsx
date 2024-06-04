import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import EmptyBasket from "./EmptyBasket";
import { theme } from "../../../../../theme";
import { isEmptyArray } from "../../../../../utils/array";
import { calculateAmountToPay } from "./helpers/calculateAmountToPay";

export const Basket = () => {
    const { basketProducts, products, orderStatut, setOrderStatut } = useContext(OrderContext)
    const amountToPay = calculateAmountToPay(basketProducts, products)
    const isLoading = products === undefined

    const handlePlaceOrder = () => {
        setOrderStatut('pending')
    }

    return (

        <BasketStyled>
            <BasketHeader amountToPay={amountToPay} />
            {isEmptyArray(basketProducts) ? (
                <EmptyBasket isLoading={isLoading} />
            ) : (
                <BasketContent />
            )}
            <BasketFooter handlePlaceOrder={handlePlaceOrder} orderStatut={orderStatut} hasOrder={basketProducts.length > 0} />
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