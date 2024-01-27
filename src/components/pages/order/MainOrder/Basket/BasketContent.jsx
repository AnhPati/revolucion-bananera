import styled from "styled-components";
import { BasketProduct } from "./BasketProduct/BasketProduct";
import { DEFAULT_IMG } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { theme } from "../../../../../theme";
import { find } from "../../../../../utils/array";
import { checkCardIsSelected } from "../MenuOrder/helpers/checkCardIsSelected";

export const BasketContent = ({ products }) => {
    const { handleDeleteBasketProduct, adminMode, handleUpdateBasketProduct, handleSelectProduct, basketProductSelected } = useContext(OrderContext)
    const isAdminMode = adminMode.isAdminMode
    const cardSelected = basketProductSelected.id

    const handleDelete = (productId, event) => {
        event.stopPropagation()
        handleDeleteBasketProduct(productId)
    }

    const onClick = (id) => {
        const productSelected = find(id, products)
        handleUpdateBasketProduct(productSelected)
        handleSelectProduct(productSelected)
    }

    return (
        <BasketContentStyled>
            <ul>
                {console.log('Produit dans le basket avant la liste')}
                {console.log(products)}
                {products.map(product =>
                    <BasketProduct
                        key={product.id}
                        {...product}
                        imageSource={product.imageSource.length > 0 ? product.imageSource : DEFAULT_IMG}
                        onDelete={(event) => handleDelete(product.id, event)}
                        isAdminMode={isAdminMode}
                        onClick={isAdminMode ? (() => onClick(product.id)) : undefined}
                        selected={checkCardIsSelected(product.id, cardSelected)}
                    />)}
            </ul>
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
    flex: 1;
    display: grid;
    box-shadow: ${theme.shadows.basketShadow};
    overflow-y: scroll;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacing.md};
        margin: 0;
        padding: 20px 16px;
    }
`;