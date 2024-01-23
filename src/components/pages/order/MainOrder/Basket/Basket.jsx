import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";
import { useBasketProducts } from "../../../../../hooks/useBasketProducts";

export const Basket = () => {
    const products = useBasketProducts()

    return (
        <BasketStyled>
            <BasketHeader />
            <BasketContent />
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