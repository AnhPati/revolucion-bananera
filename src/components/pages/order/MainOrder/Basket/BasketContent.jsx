import styled from "styled-components";
import { BasketProduct } from "./BasketProduct/BasketProduct";
import { DEFAULT_IMG } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { theme } from "../../../../../theme";
import { findObjectById } from "../../../../../utils/array";
import { checkCardIsSelected } from "../MenuOrder/helpers/checkCardIsSelected";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
                                classNames={'basket_card-transition'}
                                timeout={500}
                            >
                                <BasketProduct
                                    {...menuProduct}
                                    quantity={basketProduct.quantity}
                                    imageSource={menuProduct.imageSource.length > 0 ? menuProduct.imageSource : DEFAULT_IMG}
                                    onDelete={(event) => handleDelete(basketProduct.id, event)}
                                    isClickable={isAdminMode}
                                    onClick={isAdminMode ? (() => onClick(basketProduct.id)) : undefined}
                                    selected={checkCardIsSelected(basketProduct.id, cardSelected)}
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

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: ${theme.spacing.md};
        margin: 0;
        padding: 20px 16px;

        .basket_card-transition-appear {
            transform: translateX(100px);
            opacity: 0%;
        }

        .basket_card-transition-appear-active {    
            transform: translateX(0);
            transition: 0.5s;
            opacity: 100%;
        }

        .basket_card-transition-enter {
            transform: translateX(100px);
            opacity: 0%;
        }

        .basket_card-transition-enter-active {    
            transform: translateX(0);
            transition: 0.5s;
            opacity: 100%;
        }

        .basket_card-transition-exit {    
            transform: translateX(0);     
            opacity: 100%;
        }

        .basket_card-transition-exit-active {  
            transform: translateX(-100px);
            opacity: 0%;  
            transition: 0.5s;
        }
    }
`;