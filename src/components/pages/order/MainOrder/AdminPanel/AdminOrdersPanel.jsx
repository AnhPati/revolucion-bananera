import { MdOutlineHistory } from "react-icons/md"
import { Button } from "../../../../ui/Button"
import { useContext } from "react"
import OrderContext from "../../../../../contexts/OrderContext"
import { RemoveButton } from "../../../../ui/Card/RemoveButton"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import { filterArrayWithId } from "../../../../../utils/array"

export const AdminOrdersPanel = () => {
    const { orders, products, handleDeleteOrder } = useContext(OrderContext)

    const onDelete = (orderId, event) => {
        event.stopPropagation()
        handleDeleteOrder(orderId)
    }
    return (
        <AdminOrdersPanelStyled>
            <div className="orders_admin-container">
                {orders.map(order => {
                    if (order.statut === "to process") {
                        return (
                            <div className={"order_admin-container"} key={order.id}>
                                <p><b>N° de commande :</b> {order.id}</p>
                                <p><b>Nom :</b> {order.userId}</p>
                                <p><b>Heure de la commande :</b> {order.orderTime.toString()}</p>
                                <p><b>Commande :</b></p>
                                <ul>
                                    {order.products.map(product => {
                                        const orderProduct = products[product.id]
                                        console.log('Order Product :')
                                        console.log(orderProduct)
                                        return (
                                            <li key={product.id}>
                                                {orderProduct.title} x{product.quantity}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <RemoveButton onClick={(event) => onDelete(order.id, event)} />
                                {console.log(orders.indexOf(order))}
                                {orders.indexOf(order) < orders.length - 1 ? <hr /> : null}
                            </div>
                        )
                    }
                })}
            </div>
            <div>
                <Button
                    label={'Historique des commandes'}
                    variant={'success'}
                    Icon={<MdOutlineHistory />}
                />
            </div>
        </AdminOrdersPanelStyled>
    )
}

const AdminOrdersPanelStyled = styled.div`
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