import styled from "styled-components";
import { useState } from "react";
import { fakeMenu2 } from '../../../../fakeData/fakeMenu'

export const MenuOrder = () => {
    const [products, setProducts] = useState(fakeMenu2)

    return (
        <MenuOrderStyled>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id} className={'card'}>
                            <h3>{product.title}</h3>
                        </li>
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

    .card {        
        height: 330px;
        width: 240px;
    }
`;