import { RemoveButton } from "../../../../../ui/Card/RemoveButton"

export const OrdersContainer = ({ orders, products, onDelete }) => {
    return (
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
    )
}
