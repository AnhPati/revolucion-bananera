import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../../ui/Card/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import AdminContext from "../../../../contexts/AdminContext";
import { PrimaryButton } from "../../../ui/PrimaryButton";

export const MenuOrder = () => {
    const { products, handleAddProduct } = useContext(AdminContext)

    return (
        <MenuOrderStyled>
            {products.length > 0 ? (
                <ul className="cards-list">
                    {products.map(({ id, imageSource, title, price }) => {
                        return (
                            <Card key={id}
                                id={id}
                                imgSrc={imageSource}
                                title={title}
                                leftDescription={formatPrice(price)}
                            />
                        )
                    })}
                </ul>
            ) : (
                <div className="menu-empty">
                    <h1>
                        Le menu est vide ?
                    </h1>
                    <h2>
                        Cliquez ci-dessous pour le réinitialiser
                    </h2>
                    <PrimaryButton
                        label={'Générer de nouveaux produits'}
                        onClick={handleAddProduct}
                    />
                </div>
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

    .menu-empty {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 21px;

        h1, h2 {
            text-align: center;
            color: #747B91;
            font-size: 36px;
            margin: 0;
        }

        h2 {
            font-weight: 400;
        }

        button {
            width: auto;
            padding-left: 25px;
            padding-right: 25px;
            margin: 10px 0;
        }
    }
`;