import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { OrderContainer } from "./OrderContainer"
import { EmptyOrders } from "./EmptyOrders"
import { getOrders } from "../../../../../../api/orders"
import { useEffect } from "react"

export const OrdersContainer = ({ orders, onDelete }) => {
    const lastOrderIndex = orders.length - 1
    const hasOrders = orders.filter(order => {
        console.log('order solo')
        console.log(order)
        order.statut === "to process"
    }).length > 0
    console.log(`hasOrders : ${hasOrders}`)

    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await getOrders()
            console.log(`Firebase orders : `)
            console.log(orders)
        }

        fetchOrders()

    }, [])

    return (
        <OrdersContainerStyled>
            {console.log('Orders ???')}
            {console.log(hasOrders)}
            {hasOrders ? (
                orders.map(order => {
                    console.log("Order en cours")
                    console.log(order.products)
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