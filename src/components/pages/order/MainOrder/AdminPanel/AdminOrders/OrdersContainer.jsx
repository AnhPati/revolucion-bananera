import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { OrderContainer } from "./OrderContainer"
import { EmptyOrders } from "./EmptyOrders"

export const OrdersContainer = ({ orders, onDelete }) => {
    const lastOrderIndex = orders.length - 1
    const hasOrders = orders.filter(order => order.statut === "to process").length > 0
    console.log(`hasOrders : ${hasOrders}`)
    return (
        <OrdersContainerStyled>
            {hasOrders ? (
                orders.map(order => {
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
                })
            ) : (
                <EmptyOrders />
            )}
        </OrdersContainerStyled>
    )
}

const OrdersContainerStyled = styled.div`
    height: 150px;
    padding: 10px 15px;
    border: solid 1px ${theme.colors.greyLight};
    box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.075) inset;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;

    &:hover { 
        scrollbar-color: initial;
    }
    .empty-message {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        h2 {
            margin: 0;
            color: #747b91;
            font-size: 36px;
            font-weight: 400;
            text-align: center;
        }
    }
`;