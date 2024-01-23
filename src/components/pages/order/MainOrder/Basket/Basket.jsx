import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";
import { useBasketProducts } from "../../../../../hooks/useBasketProducts";

export const Basket = () => {
    const { basketProducts } = useBasketProducts()
    console.log(`Combien de produits ? ${basketProducts.length}`)

    return (
        <BasketStyled>
            <BasketHeader />
            <BasketContent products={basketProducts} />
            <BasketFooter />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background: #F5F5F7;
`;