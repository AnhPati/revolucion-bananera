import styled from "styled-components";
import { BasketProduct } from "./BasketProduct/BasketProduct";
import { BASKET_MESSAGE, DEFAULT_IMG } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { theme } from "../../../../../theme";
import { findObjectById } from "../../../../../utils/array";
import { checkCardIsSelected } from "../MenuOrder/helpers/checkCardIsSelected";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BasketProductAnimation } from "../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../utils/string";
import { formatPrice } from "../../../../../utils/maths";

export const BasketContent = () => {
    const { userId, basketProducts, handleDeleteBasketProduct, adminMode, handleSelectProduct, products } = useContext(OrderContext)
    const isAdminMode = adminMode.isAdminMode
    const cardSelected = adminMode.adminPanel.cardSelected

    const handleDelete = (productId, event) => {
        event.stopPropagation()
        handleDeleteBasketProduct(productId, userId)
    }

    const onClick = (id) => {
        const productSelected = findObjectById(id, products)
        handleSelectProduct(productSelected)
    }

    return (
        <BasketContentStyled>
            <ul>
                <TransitionGroup component={null}>
                    {basketProducts.map(basketProduct => {
                        const menuProduct = findObjectById(basketProduct.id, products)
                        return (
                            <CSSTransition
                                key={basketProduct.id}
                                appear={true}
                                classNames={'basket_product-animation'}
                                timeout={300}
                            >
                                <BasketProduct
                                    {...menuProduct}
                                    quantity={basketProduct.quantity}
                                    imageSource={menuProduct.imageSource.length > 0 ? menuProduct.imageSource : DEFAULT_IMG}
                                    onDelete={(event) => handleDelete(basketProduct.id, event)}
                                    isClickable={isAdminMode}
                                    onClick={isAdminMode ? (() => onClick(basketProduct.id)) : undefined}
                                    selected={checkCardIsSelected(basketProduct.id, cardSelected)}
                                    isPublicised={convertStringToBoolean(menuProduct.isPublicised)}
                                    isUnavailable={convertStringToBoolean(menuProduct.isAvailable) === false}
                                    price={convertStringToBoolean(menuProduct.isAvailable) ? formatPrice(menuProduct.price) : BASKET_MESSAGE.UNAVAILABLE}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
    flex: 1;
    display: grid;
    box-shadow: ${theme.shadows.basketShadow};
    overflow-y: scroll;
    scrollbar-color: transparent transparent;

    &:hover { 
        scrollbar-color: initial;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacing.md};
        margin: 0;
        padding: ${theme.spacing.md} 16px;

        ${BasketProductAnimation}
    }
`;