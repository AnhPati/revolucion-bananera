import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";
import { BasketFooter } from "./BasketFooter";

export const Basket = () => {
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
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;
`;