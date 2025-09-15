import { useOrderContext } from '@/contexts/OrderContext'
import { IconButton } from '@/components/ui/IconButton'
import styled from 'styled-components'
import { MdArchive, MdUnarchive } from 'react-icons/md'
import { BasketProduct } from '@/types/Product'
import { findObjectById } from '@/utils/array'
import { theme } from '@/theme/theme'

type OrderContainerProps = {
    id: string,
    userId: string,
    orderTime: string,
    orderProducts: BasketProduct[],
    orderIndex: number,
    lastOrderIndex?: number,
    isArchived?: boolean,
    onArchiveClick?: (orderId: string, event: React.MouseEvent<HTMLSpanElement>) => void,
    onDelete?: (orderId: string) => void
}

export const OrderContainer = (
    {
        id,
        userId,
        orderTime,
        orderProducts,
        orderIndex,
        lastOrderIndex,
        isArchived,
        onArchiveClick,
        onDelete
    }: OrderContainerProps) => {
    const { products } = useOrderContext()

    return (
        <OrderContainerStyled>
            <p><b>N° de commande :</b> {id}</p>
            <p><b>Nom :</b> {userId}</p>
            <p><b>Heure de la commande :</b> {orderTime}</p>
            <p><b>Commande :</b></p>
            <ul>
                {orderProducts.map(product => {
                    if (!products) return null

                    const orderProduct = findObjectById(product.id, products)

                    if (!orderProduct) {
                        return (
                            <li key={product.id}>
                                {product.title} x{product.quantity} <span className="deleted">(Produit supprimé de la vente)</span>
                            </li>
                        )
                    }

                    return (
                        <li key={product.id}>
                            {product.title} x{product.quantity}
                        </li>
                    )
                })}
            </ul>
            <IconButton
                onClick={(event) => onArchiveClick?.(id, event)}
                Icon={isArchived ? MdUnarchive : MdArchive}
            />
            {isArchived && <IconButton
                onClick={() => onDelete?.(id)}
            />}
            {lastOrderIndex && orderIndex < lastOrderIndex ? <hr /> : null}
        </OrderContainerStyled>
    )
}

const OrderContainerStyled = styled.div`
    position: relative;

    p, li {
        font-size: ${theme.fonts.size.XS};
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
        background: ${theme.colors.greyLight};
        border: none;
    }

    .icon-button:nth-of-type(2) {
      top: 55px;
    }
`;