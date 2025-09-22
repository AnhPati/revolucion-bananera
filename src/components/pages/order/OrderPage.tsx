import styled from "styled-components";
import { theme } from "@/theme/theme";
import { OrderContextProvider } from "@/contexts/OrderContext";
import { OrderPageContent } from "./OrderPageContent";
import { OverlayMessageAnimation } from "@/theme/animations";

const OrderPage = () => {
    return (
        <OrderPageStyled>
            <div className="admin-shortcuts">
                <p className="shortcuts-title">
                    💡 Pour aller plus vite :
                </p>
                <p className="shortcuts-info">
                    ⌘ + i : Toggle "mode" admin
                </p>
                <p className="shortcuts-info">
                    ⌘ + j : Toggle "panel" admin
                </p>
                <button>Ne plus afficher</button>
            </div>
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

    .admin-shortcuts {
        position: absolute;
        top: 40px;
        left: 40px;
    }
`;