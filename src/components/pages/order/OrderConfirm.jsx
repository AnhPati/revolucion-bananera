import styled from "styled-components";
import { theme } from "../../../theme";
import { useContext } from "react";
import OrderContext from "../../../contexts/OrderContext";
import { formatPrice } from "../../../utils/maths";
import { Modal } from "../../ui/Modal/Modal";
import { ModalButtons } from "../../ui/Modal/ModalButtons";

const OrderConfirm = () => {
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
            <OrderConfirmContentStyled>
                <h1>Votre commande a bien été enregistrée !</h1>
                <div className="order_message-summary">
                    <h2>Total à payer : {formatPrice(tempOrder.amount)}</h2>
                </div>
                <ModalButtons onConfirm={handleAccept} onCancel={handleDeny} />
            </OrderConfirmContentStyled>
        </Modal>
    )
}

export default OrderConfirm

const OrderConfirmContentStyled = styled.div`
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
`;