import { MdOutlineHistory } from "react-icons/md"
import { PiNotepad } from "react-icons/pi"
import { Button } from "../../../../../ui/Button"
import styled from "styled-components"
import { OrdersContainer } from "./OrdersContainer/OrdersContainer"
import { useState } from "react"
import { useOrderContext } from "../../../../../../contexts/OrderContext"

export const AdminOrders = () => {
    const { handleArchiveOrder, handleUnarchiveOrder, handleDeleteOrder } = useOrderContext()
    const [showArchivedOrders, setShowArchivedOrders] = useState(false)

    const onArchive = (orderId, event) => {
        event.stopPropagation()
        handleArchiveOrder(orderId)
    }

    const onUnarchive = (orderId, event) => {
        event.stopPropagation()
        handleUnarchiveOrder(orderId)
    }

    const onDelete = (orderId) => {
        console.log('AdminOrders onDelete appelé avec:', orderId)
        handleDeleteOrder(orderId)
    }

    const handleOrdersView = () => {
        setShowArchivedOrders(!showArchivedOrders)
    }

    return (
        <AdminOrdersStyled>
            <OrdersContainer
                showArchivedOrders={showArchivedOrders}
                onArchive={onArchive}
                onUnarchive={onUnarchive}
                onDelete={onDelete}
            />
            <Button
                label={showArchivedOrders ? 'Commandes en cours' : 'Historique des commandes'}
                variant={'success'}
                Icon={showArchivedOrders ? PiNotepad : MdOutlineHistory}
                onClick={handleOrdersView}
            />

        </AdminOrdersStyled>
    )
}

const AdminOrdersStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 50px;
`;