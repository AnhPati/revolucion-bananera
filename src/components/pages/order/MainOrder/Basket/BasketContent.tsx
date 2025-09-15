import styled from "styled-components";
import { BasketProduct } from "./BasketProduct/BasketProduct";
import { BASKET_MESSAGE, DEFAULT_IMG } from "@/constants/product";
import { useOrderContext } from "@/contexts/OrderContext";
import { theme } from "@/theme/theme";
import { findObjectById } from "@/utils/array";
import { checkCardIsSelected } from "../MenuOrder/helpers/checkCardIsSelected";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BasketProductAnimation } from "@/theme/animations";
import { convertStringToBoolean } from "@/utils/string";
import { formatPrice } from "@/utils/maths";

export const BasketContent = () => {
    const { userId, basketProducts, handleDeleteBasketProduct, adminMode, handleSelectProduct, products } = useOrderContext()
    const isAdminMode = adminMode.isAdminMode
    const cardSelected = adminMode.adminPanel.cardSelected

    const handleDelete = (productId: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
        handleDeleteBasketProduct(productId, userId)
    }

    const onClick = (id: string, isAdminMode: boolean) => {
        if (!products) return

        const productSelected = findObjectById(id, products)
        productSelected && isAdminMode && handleSelectProduct(productSelected)
    }

    return (
        <BasketContentStyled>
            <ul>
                <TransitionGroup component={null}>
                    {basketProducts.map(basketProduct => {
                        if (!products) return

                        const menuProduct = findObjectById(basketProduct.id, products)
                        if (!menuProduct) return

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
                                    onClick={() => onClick(basketProduct.id, isAdminMode)}
                                    isSelected={checkCardIsSelected(basketProduct.id, cardSelected)}
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