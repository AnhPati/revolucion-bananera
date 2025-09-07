import { useContext } from 'react'
import OrderContext from '../../../../../../../contexts/OrderContext'
import { IconButton } from '../../../../../../ui/IconButton'
import styled from 'styled-components'
import { MdArchive, MdUnarchive } from 'react-icons/md'

export const OrderContainer = ({ id, userId, orderTime, orderProducts, orderIndex, lastOrderIndex, isArchived, onArchiveClick, onDelete }) => {
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

                    if (!orderProduct) {
                        return (
                            <li key={product.id}>
                                Produit supprimé de la vente !
                            </li>
                        )
                    }

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
            {isArchived && <IconButton
                onClick={(event) => onDelete(id, event)}
            />}
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

    .icon-button:nth-of-type(2) {
      top: 55px;
    }
`;