import { MdOutlineHistory } from "react-icons/md"
import { PiNotepad } from "react-icons/pi"
import { Button } from "../../../../../ui/Button"
import styled from "styled-components"
import { OrdersContainer } from "./OrdersContainer"
import { useState } from "react"

export const AdminOrders = () => {
    const [showArchivedOrders, setShowArchivedOrders] = useState(false)

    const handleOrdersView = () => {
        setShowArchivedOrders(!showArchivedOrders)
    }

    return (
        <AdminOrdersStyled>
            <OrdersContainer showArchivedOrders={showArchivedOrders} />
            <Button
                label={showArchivedOrders ? 'Commandes en cours' : 'Historique des commandes'}
                variant={'success'}
                Icon={showArchivedOrders ? <PiNotepad /> : <MdOutlineHistory />}
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