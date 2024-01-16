import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../../../ui/Card/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../contexts/AdminContext";
import EmptyMenu from "./EmptyMenu";
import { checkCardIsSelected } from "./helpers/checkCardIsSelected";

const DEFAULT_IMG = '/images/coming-soon.png'

export const MenuOrder = () => {
    const { products, adminMode, productSelected, handleDeleteProduct, handleSelectProduct } = useContext(AdminContext)
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
    flex: 1;
    display: flex;
    justify-content: center;

    .cards-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: ${theme.gridUnit * 7.5}px ${theme.gridUnit * 10.625}px;
        padding-top: ${theme.gridUnit * 6.25}px;
        padding-bottom: ${theme.gridUnit * 6.25}px;
        list-style: none;
    }
`;