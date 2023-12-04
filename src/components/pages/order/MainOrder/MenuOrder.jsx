import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { Card } from "../../../ui/Card/Card";
import { formatPrice } from "../../../../utils/maths";

export const MenuOrder = () => {
    const [products, setProducts] = useState(fakeMenu2)

    return (
        <MenuOrderStyled>
            <ul>
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