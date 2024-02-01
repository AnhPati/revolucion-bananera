import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../../../ui/Card/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../contexts/OrderContext";
import EmptyMenu from "./EmptyMenu";
import { checkCardIsSelected } from "./helpers/checkCardIsSelected";
import { DEFAULT_IMG } from "../../../../../enums/product";
import { findObjectById, isEmptyArray } from "../../../../../utils/array";
import { Loader } from "./Loader";



export const MenuOrder = () => {
    const { userId, products, adminMode, productSelected, handleDeleteProduct, handleSelectProduct, handleAddBasketProduct, handleDeleteBasketProduct } = useContext(OrderContext)
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

    const isLoading = products === undefined

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : isEmptyArray(products) ? (
                <EmptyMenu />
            ) : (
                <MenuOrderStyled>
                    {products.map(({ id, imageSource, title, price }) => {
                        return (
                            <Card key={id}
                                id={id}
                                imgSrc={imageSource ? imageSource : DEFAULT_IMG}
                                title={title}
                                leftDescription={formatPrice(price)}
                                hasDeleteButton={isAdminMode}
                                onDelete={(event) => onDelete(id, event)}
                                isHoverable={isAdminMode}
                                onClick={isAdminMode ? (() => onClick(id)) : undefined}
                                selected={checkCardIsSelected(id, cardSelected)}
                                onAdd={(event) => addToBasket(id, event)}
                            />
                        )
                    })}
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
`;