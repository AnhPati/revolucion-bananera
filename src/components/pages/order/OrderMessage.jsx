import styled from "styled-components";
import { theme } from "../../../theme";
import { Button } from "../../ui/Button";
import { useContext } from "react";
import OrderContext from "../../../contexts/OrderContext";
import { formatPrice } from "../../../utils/maths";
import { Modal } from "../../ui/Modal/Modal";

const OrderMessage = () => {
    const { userId, tempOrder, handleValidOrder, handleDenyOrder, handleClearBasketProduct } = useContext(OrderContext)

    const handleAccept = () => {
        handleValidOrder(tempOrder)
        handleClearBasketProduct(userId)
    }

    const handleDeny = () => {
        handleDenyOrder()
    }
    return (
        <Modal
            overlayColor={theme.colors.primary}
            overlayOpacity="50%"
            containerWidth="auto"
            containerMaxWidth="500px"
        >
            <OrderMessageContentStyled>
                <h1>Votre commande a bien été enregistrée !</h1>
                <div className="order_message-summary">
                    <h2>Total à payer : {formatPrice(tempOrder.amount)}</h2>
                </div>
                <div className="buttons-container">
                    <Button
                        label='Confirmer'
                        onClick={handleAccept}
                    />
                    <Button
                        label='Annuler'
                        onClick={handleDeny}
                    />
                </div>
            </OrderMessageContentStyled>
        </Modal>
    )
}

export default OrderMessage

const OrderMessageContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 40px 40px 60px 40px;

    h1 {
        margin: 0;
        font-size: 36px;
        font-weight: 400;
        text-align: center;
    }

    .order_message-summary {
        h2 {
            margin: 0;
            text-align: center;
        }
    }

    .buttons-container {
        display: flex;
        justify-content: center;
        gap: 20px;

        button {
            width: 95px;
        }
    }
`;