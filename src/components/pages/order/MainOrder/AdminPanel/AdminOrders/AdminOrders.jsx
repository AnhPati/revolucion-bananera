import { MdOutlineHistory } from "react-icons/md"
import { Button } from "../../../../../ui/Button"
import { useContext } from "react"
import OrderContext from "../../../../../../contexts/OrderContext"
import styled from "styled-components"
import { theme } from "../../../../../../theme"
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
            <div>
                <Button
                    label={'Historique des commandes'}
                    variant={'success'}
                    Icon={<MdOutlineHistory />}
                />
            </div>
        </AdminOrdersStyled>
    )
}

const AdminOrdersStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 50px;

    .orders_admin-container {
        height: 150px;
        padding: 10px 15px;
        border: solid 1px ${theme.colors.greyLight};
        overflow: hidden;
        overflow-y: scroll;
        scrollbar-color: transparent transparent;

        &:hover { 
            scrollbar-color: initial;
        }

        .order_admin-container {
            position: relative;

            p, li {
                font-size: 12px;
            }

            p {
                margin: 0;
            }

            ul {
                margin: 0;
                padding-left: 10px;
            }

            hr {
                height: 1px;
                background: #e4e5e9;
                border: none;
            }
        }
    }
`;