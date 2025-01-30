import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { OrderContainer } from "./OrderContainer"
import { EmptyOrders } from "./EmptyOrders"
import { useContext, useEffect, useState } from "react"
import OrderContext from "../../../../../../contexts/OrderContext"
import { getOrders } from "../../../../../../api/orders"

export const OrdersContainer = () => {
    const { handleDeleteOrder } = useContext(OrderContext)
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await getOrders()
            setOrders(orders)
            setLoading(false)
        }

        fetchOrders()

    }, [])

    const lastOrderIndex = orders.length - 1

    const onDelete = (orderId, event) => {
        event.stopPropagation()
        handleDeleteOrder(orderId)
    }

    return (
        <OrdersContainerStyled>
            {!loading ? (
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
`;