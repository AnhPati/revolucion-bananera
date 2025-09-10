import styled from "styled-components"
import { theme } from "../../../../../theme"
import { BASKET_MESSAGE } from "../../../../../constants/product"

export default function EmptyBasket({ isLoading }) {
    return (
        <EmptyBasketStyled>
            <div className="empty-message">
                <h2>{isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}</h2>
            </div>
        </EmptyBasketStyled>
    )
}

const EmptyBasketStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basketShadow};

    .empty-message {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(95vh - 10vh - 70px - 70px);
        
        h2 {
            margin: 0;
            color: ${theme.colors.greyBlue};
            font-size: ${theme.fonts.size.P4};
            font-weight: ${theme.fonts.weights.regular};
            text-align: center;
        }
    }

  
  
`