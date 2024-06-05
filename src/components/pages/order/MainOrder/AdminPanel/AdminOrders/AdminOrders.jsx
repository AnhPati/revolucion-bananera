import { MdOutlineHistory } from "react-icons/md"
import { Button } from "../../../../../ui/Button"
import { useContext } from "react"
import OrderContext from "../../../../../../contexts/OrderContext"
import styled from "styled-components"
import { OrdersContainer } from "./OrdersContainer"

export const AdminOrders = () => {
    const { orders, products, handleDeleteOrder } = useContext(OrderContext)

    const onDelete = (orderId, event) => {
        event.stopPropagation()
        handleDeleteOrder(orderId)
    }

    return (
        <AdminOrdersStyled>
            <OrdersContainer
                orders={orders}
                products={products}
                onDelete={onDelete}
            />
            <Button
                label={'Historique des commandes'}
                variant={'success'}
                Icon={<MdOutlineHistory />}
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