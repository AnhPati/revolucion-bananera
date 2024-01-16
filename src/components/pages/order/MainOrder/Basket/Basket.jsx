import styled from "styled-components";
import { BasketHeader } from "./BasketHeader";

export const Basket = () => {
    return (
        <BasketStyled>
            <BasketHeader />
            <div className={'basket-content'}>
                <h2>
                    Votre commande est vide.
                </h2>
            </div>
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

    .basket-content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
            margin: 0;
            color: #747B91;
            font-size: 36px;
            font-weight: 400;
            line-height: 72px; 
        }
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