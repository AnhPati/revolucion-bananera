import { useOrderContext } from "@/contexts/OrderContext";
import { useEffect } from "react";
import { initialiseUserSession } from "./helpers/initialiseUserSession";
import OrderConfirm from "./OrderConfirm";
import Navbar from "./Navbar/Navbar";
import { MainOrder } from "./MainOrder/MainOrder";
import { getOrders } from "@/api/orders";
import { CSSTransition } from "react-transition-group";
import { AdminShortcuts } from "./MainOrder/AdminPanel/AdminShortcuts";
import styled from "styled-components";
import { theme } from "@/theme/theme";

export const OrderPageContent = () => {
    const { userId, adminMode, setProducts, setBasketProducts, setOrders, orders, orderStatut } = useOrderContext()

    useEffect(() => {
        if (userId) initialiseUserSession(userId, adminMode.isAdminMode, setProducts, setBasketProducts, setOrders)
    }, [userId])

    useEffect(() => {
        if (adminMode.isAdminMode && orders === undefined) {
            const loadOrders = async () => {
                const ordersData = await getOrders()
                setOrders(ordersData)
            }
            loadOrders()
        }
    }, [adminMode.isAdminMode])

    return (
        <>
            <AdminShortcuts />
            <OrderPageContentStyled>
                <CSSTransition
                    in={orderStatut === 'pending'}
                    appear={true}
                    classNames={'overlay-message-animation'}
                    timeout={300}
                    unmountOnExit
                >
                    <OrderConfirm />
                </CSSTransition>
                <Navbar />
                <MainOrder />
            </OrderPageContentStyled>

        </>
    )
}

const OrderPageContentStyled = styled.div`
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.extraRound};
`;