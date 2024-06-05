import { useContext } from 'react'
import OrderContext from '../../../../../../contexts/OrderContext'
import { RemoveButton } from '../../../../../ui/Card/RemoveButton'
import styled from 'styled-components'

export const OrderContainer = ({ id, userId, orderTime, orderProducts, orderIndex, lastOrderIndex, onDelete }) => {
    const { products } = useContext(OrderContext)

    return (
        <OrderContainerStyled>
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
        </OrderContainerStyled>
    )
}

const OrderContainerStyled = styled.div`
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
`;