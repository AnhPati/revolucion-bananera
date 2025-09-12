import styled from "styled-components";
import { theme } from "@/theme/theme";
import { Button } from "@/components/ui/Button";
import { OrderStatut } from "@/types/Order";

type BasketFooterProps = {
    handlePlaceOrder?: React.MouseEventHandler<HTMLButtonElement>,
    orderStatut?: OrderStatut,
    hasOrder: boolean
}

export const BasketFooter = ({ handlePlaceOrder, orderStatut, hasOrder }: BasketFooterProps) => {
    return (
        <BasketFooterStyled>
            <div className="order_button-container">
                <Button
                    label="Commander"
                    onClick={handlePlaceOrder}
                    disabled={orderStatut === "pending" || !hasOrder}
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