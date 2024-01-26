import styled from "styled-components";
import { BasketProduct } from "./BasketProduct/BasketProduct";
import { DEFAULT_IMG } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { theme } from "../../../../../theme";

export const BasketContent = ({ products }) => {
    const { handleDeleteBasketProduct, adminMode } = useContext(OrderContext)
    const isAdminMode = adminMode.isAdminMode

    const handleDelete = (productId) => {
        handleDeleteBasketProduct(productId)
    }

    return (
        <BasketContentStyled>
            <ul>
                {products.map(product =>
                    <BasketProduct
                        key={product.id}
                        {...product}
                        imageSource={product.imageSource.length > 0 ? product.imageSource : DEFAULT_IMG}
                        onDelete={() => handleDelete(product.id)}
                        isAdminMode={isAdminMode}
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