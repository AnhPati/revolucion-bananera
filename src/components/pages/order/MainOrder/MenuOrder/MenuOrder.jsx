import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../../../ui/Card/Card";
import { formatPrice } from "../../../../../utils/maths";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../contexts/AdminContext";
import EmptyMenu from "./EmptyMenu";

const DEFAULT_IMG = '/images/coming-soon.png'

export const MenuOrder = () => {
    const { products, adminMode, handleDeleteProduct } = useContext(AdminContext)
    const isAdminMode = adminMode.isAdminMode

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
                                onDelete={handleDeleteProduct}
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