import styled from "styled-components";
import { theme } from "@/theme/theme";
import { OrderContextProvider } from "@/contexts/OrderContext";
import { OrderPageContent } from "./OrderPageContent";
import { OverlayMessageAnimation } from "@/theme/animations";

const OrderPage = () => {
    return (
        <OrderPageStyled>
            <OrderContextProvider>
                <OrderPageContent />
            </OrderContextProvider>
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
`;