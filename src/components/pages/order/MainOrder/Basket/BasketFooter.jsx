import styled from "styled-components";
import { theme } from "../../../../../theme";
import { Button } from "../../../../ui/Button"

export const BasketFooter = ({ handlePlaceOrder, orderStatut, hasOrder }) => {
    return (
        <BasketFooterStyled>
            <div className="order_button-container">
                <Button
                    label="Commander"
                    onClick={handlePlaceOrder}
                    isDisabled={orderStatut === "pending" || !hasOrder}
                ></Button>
            </div>
        </BasketFooterStyled>
    )
}

const BasketFooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    background-color: ${theme.colors.background_dark};

    h4 {
        margin: 0;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P2};
    }

    .order_button-container {
        width: 115px;

        button {
            padding-top: ${theme.gridUnit * 1.5}px;
            padding-bottom: ${theme.gridUnit * 1.5}px;
        }
    }
`;