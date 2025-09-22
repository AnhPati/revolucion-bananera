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
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.sm};

        padding: 20px;
        background: ${theme.colors.dark};
        color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};

        p {
            margin: 0;

            &.shortcuts-title {
                font-size: ${theme.fonts.size.P0};
                font-weight: ${theme.fonts.weights.bold};
            }

            &.shortcuts-info {
                font-size: ${theme.fonts.size.SM};
                font-weight: ${theme.fonts.weights.regular};
            }
        }

        button {
            width: 220px;
            padding: 13px 0;
            font-size: 13.5px;
            font-weight: ${theme.fonts.weights.regular};
            background: ${theme.colors.dark};
            color: ${theme.colors.white};
            border: 1px solid ${theme.colors.white};
            border-radius: 25px;
        }
        
    }
`;