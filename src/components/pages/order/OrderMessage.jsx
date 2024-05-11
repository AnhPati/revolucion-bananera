import styled from "styled-components";
import { theme } from "../../../theme";

const OrderMessage = () => {
    return (
        <OrderMessageStyled>
            <div className="order_message-layer"></div>
            <div className="order_message-container">
                <h1>Votre commande a bien été enregistrée !</h1>
            </div>
        </OrderMessageStyled>
    )
}

export default OrderMessage

const OrderMessageStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    z-index: 3;

    .order_message-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${theme.colors.primary};
        opacity: 50%;
    }

    .order_message-container {
        background: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
        z-index: 0;
    }
`;