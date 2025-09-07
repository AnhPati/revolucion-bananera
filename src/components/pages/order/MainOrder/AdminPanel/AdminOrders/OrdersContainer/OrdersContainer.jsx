import styled from "styled-components"
import { theme } from "../../../../../../../theme"
import { OrderContainer } from "./OrderContainer"
import { EmptyOrders } from "./EmptyOrders"
import { useContext, useMemo, useState } from "react"
import OrderContext from "../../../../../../../contexts/OrderContext"
import { sortOrdersByDate } from "../../../../../../../utils/orders"
import { DeleteOrderConfirm } from "./DeleteOrderConfirm"
import { CSSTransition } from "react-transition-group"
import { OverlayMessageAnimation } from "../../../../../../../theme/animations"

export const OrdersContainer = ({ showArchivedOrders, onArchive, onUnarchive, onDelete }) => {
    const { orders } = useContext(OrderContext)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
    const [orderToDelete, setOrderToDelete] = useState(undefined)

    const onDeleteClick = (orderId) => {
        setOrderToDelete(orderId)
        setShowDeleteConfirm(true)
    }

    const onDeleteConfirm = () => {
        onDelete(orderToDelete)
        setOrderToDelete(undefined)
        setShowDeleteConfirm(false)
    }

    const onDeleteCancel = () => {
        setOrderToDelete(undefined)
        setShowDeleteConfirm(false)
    }

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
                <div className="loading-container">
                    <h2>En chargement</h2>
                </div>
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
                                onDelete={onDeleteClick}
                            />
                        )
                    })
                ) : (
                    <EmptyOrders {...(showArchivedOrders && { emptyMessage: "Aucune commande archivée." })} />
                )}

            <CSSTransition
                in={showDeleteConfirm}
                appear={true}
                classNames={'overlay-message-animation'}
                timeout={300}
                unmountOnExit
            >
                <DeleteOrderConfirm
                    orderToDelete={orderToDelete}
                    onConfirm={onDeleteConfirm}
                    onCancel={onDeleteCancel}
                />
            </CSSTransition>
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

    ${OverlayMessageAnimation}

    .loading-container {
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
    

    &:hover { 
        scrollbar-color: initial;
    }
`;