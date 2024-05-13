import styled from "styled-components";
import { theme } from "../../../theme";
import { Button } from "../../ui/Button";
import { useContext } from "react";
import OrderContext from "../../../contexts/OrderContext";
import { fakeBasket } from "../../../fakeData/fakeBasket";
import { getDeepClone } from "../../../utils/array";

const OrderMessage = () => {
    const { userId, setOrderStatut, basketProducts, setBasketProducts, orders, setOrders } = useContext(OrderContext)

    const handleAccept = () => {
        const ordersCopy = getDeepClone(orders)
        const newOrder = {
            id: 9,
            userId: userId,
            orderTime: new Date(),
            products: basketProducts
        }
        const newOrders = [newOrder, ...ordersCopy]
        setOrderStatut('accepted')
        setOrders(newOrders)
        setBasketProducts(fakeBasket.EMPTY)
    }

    const handleDeny = () => {
        setOrderStatut('none')
    }

    return (
        <OrderMessageStyled>
            <div className="order_message-layer"></div>
            <div className="order_message-container">
                <h1>Votre commande a bien été enregistrée !</h1>
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: 40px 40px 60px 40px;
        border-radius: 5px;
        background: ${theme.colors.background_white};
        color: ${theme.colors.greyBlue};
        z-index: 0;

        .buttons-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            button {
                width: 95px;
            }
        }
    }
`;