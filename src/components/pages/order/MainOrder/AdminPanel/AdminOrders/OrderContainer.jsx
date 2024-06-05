import { useContext } from 'react'
import OrderContext from '../../../../../../contexts/OrderContext'
import { RemoveButton } from '../../../../../ui/Card/RemoveButton'

export const OrderContainer = ({ id, userId, orderTime, orderProducts, orderIndex, lastOrderIndex, onDelete }) => {
    const { products } = useContext(OrderContext)
    return (
        <div className={"order_admin-container"} key={id}>
            <p><b>N° de commande :</b> {id}</p>
            <p><b>Nom :</b> {userId}</p>
            <p><b>Heure de la commande :</b> {orderTime.toString()}</p>
            <p><b>Commande :</b></p>
            <ul>
                {orderProducts.map(product => {
                    const orderProduct = products[product.id]

                    return (
                        <li key={product.id}>
                            {orderProduct.title} x{product.quantity}
                        </li>
                    )
                })}
            </ul>
            <RemoveButton onClick={(event) => onDelete(id, event)} />
            {orderIndex < lastOrderIndex ? <hr /> : null}
        </div>
    )
}