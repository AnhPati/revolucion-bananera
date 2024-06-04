import { MdOutlineHistory } from "react-icons/md"
import { Button } from "../../../../ui/Button"
import { useContext } from "react"
import OrderContext from "../../../../../contexts/OrderContext"
import { RemoveButton } from "../../../../ui/Card/RemoveButton"

export const AdminOrdersPanel = () => {
    const { orders, products } = useContext(OrderContext)
    return (
        <div>
            <div>
                {orders.map(order => {
                    return (
                        <div key={order.id}>
                            <h6>N° de commande : {order.id}</h6>
                            <h6>Nom : {order.userId}</h6>
                            <h6>Heure de la commande : {order.orderTime.toString()}</h6>
                            <h6>Commande :</h6>
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
        </div>
    )
}