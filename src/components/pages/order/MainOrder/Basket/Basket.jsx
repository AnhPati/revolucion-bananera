import styled from "styled-components";

export const Basket = () => {
    return (
        <BasketStyled>
            <div className={'basket-header'}>
                <h3>
                    Total
                </h3>
                <h3>
                    0,00 €
                </h3>
            </div>
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

    .basket-header, .basket-footer {
        height: 70px;
        background-color: #000;
    }

    .basket-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 16px;
        padding-right: 16px;

        h3 {
            margin: 0;
            color: #FFA01B;
            font-size: 36px;
            font-weight: 400;
            letter-spacing: 2px;
        }
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