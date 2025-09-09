import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../../../ui/Card/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../contexts/OrderContext";
import EmptyMenu from "./EmptyMenu";
import { checkCardIsSelected } from "./helpers/checkCardIsSelected";
import { DEFAULT_IMG, UNAVAILABLE_PRODUCT_IMG } from "../../../../../enums/product";
import { findObjectById, isEmptyArray } from "../../../../../utils/array";
import { Loader } from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ProductCardAnimation } from "../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../utils/string";



export const MenuOrder = () => {
    const { userId, products, basketProducts, adminMode, productSelected, handleDeleteProduct, handleSelectProduct, handleAddBasketProduct, handleDeleteBasketProduct, decrementQuantityProduct } = useContext(OrderContext)
    const isAdminMode = adminMode.isAdminMode
    const cardSelected = productSelected.id

    const onDelete = (productId, event) => {
        event.stopPropagation()
        handleDeleteBasketProduct(productId, userId)
        handleDeleteProduct(productId, userId)
    }

    const onClick = (id) => {
        const productSelected = findObjectById(id, products)
        handleSelectProduct(productSelected)
    }

    const addToBasket = (id, event) => {
        event.stopPropagation()
        const productToAdd = findObjectById(id, products)
        handleAddBasketProduct(productToAdd, userId)
    }

    const removeFromBasket = (id, event) => {
        event.stopPropagation()
        decrementQuantityProduct(id)

        const removedProduct = findObjectById(id, basketProducts)

        if (removedProduct.quantity < 2) {
            handleDeleteBasketProduct(removedProduct.id, userId)
        }
    }

    const isLoading = products === undefined

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : isEmptyArray(products) ? (
                <EmptyMenu />
            ) : (
                <MenuOrderStyled>
                    <TransitionGroup component={null}>
                        {products.map(({ id, imageSource, title, price, isPublicised, isAvailable }) => {
                            return (
                                <CSSTransition
                                    key={id}
                                    classNames={'product-card'}
                                    timeout={300}
                                >
                                    <Card
                                        id={id}
                                        imgSrc={imageSource ? imageSource : DEFAULT_IMG}
                                        title={title}
                                        leftDescription={formatPrice(price)}
                                        hasDeleteButton={isAdminMode}
                                        onDelete={(event) => onDelete(id, event)}
                                        isHoverable={isAdminMode}
                                        onClick={isAdminMode ? (() => onClick(id)) : undefined}
                                        isSelected={checkCardIsSelected(id, cardSelected)}
                                        onAdd={(event) => addToBasket(id, event)}
                                        onRemove={(event) => removeFromBasket(id, event)}
                                        isPublicised={convertStringToBoolean(isPublicised)}
                                        isUnavailable={convertStringToBoolean(isAvailable) === false}
                                        unavailableImage={UNAVAILABLE_PRODUCT_IMG}
                                        quantity={basketProducts.find(basketProduct => basketProduct.id === id) ? basketProducts.find(basketProduct => basketProduct.id === id).quantity : 0}
                                    />
                                </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </MenuOrderStyled>
            )}
        </>
    )
}

const MenuOrderStyled = styled.ul`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.gridUnit * 7.5}px ${theme.gridUnit * 10.625}px;
    margin: 0;
    padding: ${theme.gridUnit * 6.25}px ${theme.gridUnit * 6.25}px ${theme.gridUnit * 18.75}px ${theme.gridUnit * 6.25}px;
    list-style: none;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;

    &:hover { 
        scrollbar-color: initial;
    }

    ${ProductCardAnimation}
`;