import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { theme } from "../../../../theme";
import { Card } from "../../../ui/Card/Card";

export const MenuOrder = () => {
    const [products, setProducts] = useState(fakeMenu2)

    return (
        <MenuOrderStyled>
            <ul>
                {products.map(product => {
                    return (
                        <Card key={product.id}
                            id={product.id}
                            imgSrc={product.imageSource}
                            title={product.title}
                            price={product.price}
                        />
                    )
                })}
            </ul>
        </MenuOrderStyled>
    )
}

const MenuOrderStyled = styled.section`
    flex: 1;
    padding-top: 50px;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 85px 60px;
        list-style: none;
    }
`;