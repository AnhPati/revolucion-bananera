import { useContext } from 'react'
import OrderContext from '../../../../../../contexts/OrderContext'
import { IconButton } from '../../../../../ui/IconButton'
import styled from 'styled-components'
import { MdArchive, MdUnarchive } from 'react-icons/md'

export const OrderContainer = ({ id, userId, orderTime, orderProducts, orderIndex, lastOrderIndex, isArchived, onArchiveClick }) => {
    const { products } = useContext(OrderContext)

    return (
        <OrderContainerStyled>
            <p><b>N° de commande :</b> {id}</p>
            <p><b>Nom :</b> {userId}</p>
            <p><b>Heure de la commande :</b> {orderTime}</p>
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
            <IconButton
                onClick={(event) => onArchiveClick(id, event)}
                Icon={isArchived ? <MdUnarchive /> : <MdArchive />}
            />
            {isArchived && <IconButton style={{ top: '55px' }} onClick={(event) => onArchiveClick(id, event)} />}
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