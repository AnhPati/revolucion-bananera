import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../../../ui/Card/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../contexts/OrderContext";
import EmptyMenu from "./EmptyMenu";
import { checkCardIsSelected } from "./helpers/checkCardIsSelected";
import { DEFAULT_IMG } from "../../../../../enums/product";



export const MenuOrder = () => {
    const { products, adminMode, productSelected, handleDeleteProduct, handleSelectProduct, handleAddBasketProduct } = useContext(OrderContext)
    const isAdminMode = adminMode.isAdminMode
    const cardSelected = productSelected.id

    const onDelete = (productId, event) => {
        event.stopPropagation()
        handleDeleteProduct(productId)
    }

    const onClick = (id) => {
        const productSelected = products.find(product => product.id === id)
        handleSelectProduct(productSelected)
    }

    const addToBasket = (id, event) => {
        event.stopPropagation()
        const productToAdd = products.find(product => product.id === id)
        handleAddBasketProduct(productToAdd)
    }

    return (
        <MenuOrderStyled>
            {products.length > 0 ? (
                <ul className="cards-list">
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
                </ul>
            ) : (
                <EmptyMenu />
            )}
        </MenuOrderStyled>
    )
}

const MenuOrderStyled = styled.section`
    position: relative;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .cards-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${theme.gridUnit * 7.5}px ${theme.gridUnit * 10.625}px;
        padding-top: ${theme.gridUnit * 6.25}px;
        padding-bottom: ${theme.gridUnit * 6.25}px;
        list-style: none;
    }
`;