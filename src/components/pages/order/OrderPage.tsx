import styled from "styled-components";
import { theme } from "@/theme/theme";
import { OrderContextProvider } from "@/contexts/OrderContext";
import { OrderPageContent } from "./OrderPageContent";
import { OverlayMessageAnimation } from "@/theme/animations";
import { AdminShortcuts } from "./MainOrder/AdminPanel/AdminShortcuts";

const OrderPage = () => {
    return (
        <OrderPageStyled>
            <AdminShortcuts />
            <div className={'order-container'}>
                <OrderContextProvider>
                    <OrderPageContent />
                </OrderContextProvider>
            </div>
        </OrderPageStyled>
    )
}

export default OrderPage

const OrderPageStyled = styled.div`
    position: relative;
    height: 100vh;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    ${OverlayMessageAnimation}

    .order-container {
        width: 1400px;
        height: 95vh;
        display: flex;
        flex-direction: column;
        background: ${theme.colors.background_white};
        border-radius: ${theme.borderRadius.extraRound};
    }
`;