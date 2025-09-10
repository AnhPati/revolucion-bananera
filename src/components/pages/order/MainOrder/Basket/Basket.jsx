import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";
import { useOrderContext } from "../../../../../contexts/OrderContext";
import EmptyBasket from "./EmptyBasket";
import { theme } from "../../../../../theme";
import { isEmptyArray } from "../../../../../utils/array";
import { calculateAmountToPay } from "./helpers/calculateAmountToPay";
import { formatDate } from "../../../../../utils/date";

export const Basket = () => {
    const { basketProducts, products, orderStatut, handleCheckOrder, userId } = useOrderContext()
    const amountToPay = calculateAmountToPay(basketProducts, products)
    const isLoading = products === undefined

    const handlePlaceOrder = () => {
        const newOrder = {
            id: crypto.randomUUID(),
            userId: userId,
            amount: amountToPay,
            orderTime: formatDate(new Date()),
            products: basketProducts,
            statut: "to process"
        }

        handleCheckOrder(newOrder)
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