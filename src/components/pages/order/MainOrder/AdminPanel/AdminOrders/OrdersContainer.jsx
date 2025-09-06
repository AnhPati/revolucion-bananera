import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { OrderContainer } from "./OrderContainer"
import { EmptyOrders } from "./EmptyOrders"
import { useContext, useMemo } from "react"
import OrderContext from "../../../../../../contexts/OrderContext"
import { sortOrdersByDate } from "../../../../../../utils/orders"

export const OrdersContainer = ({ showArchivedOrders, onArchive, onUnarchive, onDelete }) => {
    const { orders } = useContext(OrderContext)

    const isLoading = orders === undefined
    const lastOrderIndex = isLoading ? undefined : orders.length - 1


    const statutToDisplay = showArchivedOrders ? "archived" : "to process"

    const ordersToDisplay = useMemo(() => {
        if (isLoading) return undefined

        return sortOrdersByDate(orders.filter(order => order.statut === statutToDisplay))
    }, [isLoading, orders, statutToDisplay])

    return (
        <OrdersContainerStyled>
            {isLoading ?
                <h2>En chargement</h2>
                : ordersToDisplay.length > 0 ? (
                    ordersToDisplay.map(order => {
                        return (
                            <OrderContainer
                                key={order.id}
                                id={order.id}
                                userId={order.userId}
                                orderTime={order.orderTime}
                                orderProducts={order.products}
                                orderIndex={orders.indexOf(order)}
                                lastOrderIndex={lastOrderIndex}
                                isArchived={showArchivedOrders}
                                onArchiveClick={showArchivedOrders ? onUnarchive : onArchive}
                                onDelete={onDelete}
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