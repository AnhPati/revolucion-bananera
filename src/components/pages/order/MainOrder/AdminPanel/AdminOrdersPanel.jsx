import { MdOutlineHistory } from "react-icons/md"
import { Button } from "../../../../ui/Button"
import { useContext } from "react"
import OrderContext from "../../../../../contexts/OrderContext"
import { RemoveButton } from "../../../../ui/Card/RemoveButton"
import styled from "styled-components"
import { theme } from "../../../../../theme"

export const AdminOrdersPanel = () => {
    const { orders, products } = useContext(OrderContext)
    return (
        <AdminOrdersPanelStyled>
            <div className="orders-container">
                {orders.map(order => {
                    return (
                        <div key={order.id}>
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
                            <RemoveButton />
                        </div>
                    )
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

    .orders-container {
        height: 150px;
        padding: 10px 15px;
        border: solid 1px ${theme.colors.greyLight};
        border-radius: ${theme.borderRadius.round};
        overflow: hidden;
        overflow-y: scroll;
        scrollbar-color: transparent transparent;

        &:hover { 
            scrollbar-color: initial;
        }

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
    }
`;