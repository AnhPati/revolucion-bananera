import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";
import { BasketContent } from "./BasketContent";

export const Basket = () => {
    return (
        <BasketStyled>
            <BasketHeader />
            <BasketContent />
            <div className={'basket-footer'}>
                <h4>
                    Codé avec ❤️ et React.JS
                </h4>
            </div>
        </BasketStyled>
    )
}

const BasketStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .basket-footer {
        height: 70px;
        background-color: #000;
    }

    .basket-footer {
        display: flex;
        align-items: center;
        justify-content: center;

        h4 {
            margin: 0;
            color: #FFF;
            font-size: 20px;
        }
    }
`;