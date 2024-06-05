import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { OrderContainer } from "./OrderContainer"

export const OrdersContainer = ({ orders, onDelete }) => {
    const lastOrderIndex = orders.length - 1

    return (
        <OrdersContainerStyled>
            {orders.map(order => {
                if (order.statut === "to process") {
                    return (
                        <OrderContainer
                            key={order.id}
                            id={order.id}
                            userId={order.userId}
                            orderTime={order.orderTime}
                            orderProducts={order.products}
                            orderIndex={orders.indexOf(order)}
                            lastOrderIndex={lastOrderIndex}
                            onDelete={onDelete}
                        />
                    )
                }
            })}
        </OrdersContainerStyled>
    )
}

const OrdersContainerStyled = styled.div`
    height: 150px;
    padding: 10px 15px;
    border: solid 1px ${theme.colors.greyLight};
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;

    &:hover { 
        scrollbar-color: initial;
    }
`;