import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { OrderContainer } from "./OrderContainer"
import { EmptyOrders } from "./EmptyOrders"
import { useContext, useMemo } from "react"
import OrderContext from "../../../../../../contexts/OrderContext"
import { sortOrdersByDate } from "../../../../../../utils/orders"

export const OrdersContainer = () => {
    const { orders, handleArchiveOrder } = useContext(OrderContext)

    const isLoading = orders === undefined
    const lastOrderIndex = isLoading ? undefined : orders.length - 1

    const onArchive = (orderId, event) => {
        event.stopPropagation()
        handleArchiveOrder(orderId)
    }

    const pendingOrders = useMemo(() => {
        if (isLoading) return undefined

        return sortOrdersByDate(orders.filter(order => order.statut === "to process"))
    }, [isLoading, orders])

    return (
        <OrdersContainerStyled>
            {isLoading ?
                <h2>En chargement</h2>
                : pendingOrders.length > 0 ? (
                    pendingOrders.map(order => {
                        return (
                            <OrderContainer
                                key={order.id}
                                id={order.id}
                                userId={order.userId}
                                orderTime={order.orderTime}
                                orderProducts={order.products}
                                orderIndex={orders.indexOf(order)}
                                lastOrderIndex={lastOrderIndex}
                                onArchive={onArchive}
                            />
                        )
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
`;