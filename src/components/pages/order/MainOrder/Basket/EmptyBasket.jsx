import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function EmptyBasket() {
    return (
        <EmptyBasketStyled>
            <div className="empty-message">
                <h2>Votre commande est vide.</h2>
            </div>
        </EmptyBasketStyled>
    )
}

const EmptyBasketStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;

    .empty-message {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(95vh - 10vh - 70px - 70px);
        
        h2 {
            margin: 0;
            color: #747B91;
            font-size: 36px;
            font-weight: 400;
            text-align: center;
        }
    }

  
  
`