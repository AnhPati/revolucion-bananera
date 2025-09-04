import styled from "styled-components";
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme";
import { MainOrder } from "./MainOrder/MainOrder";
import OrderContext from "../../../contexts/OrderContext";
import { useAdminProducts } from "../../../hooks/useAdminProducts";
import { useBasketProducts } from "../../../hooks/useBasketProducts";
import { useEffect } from "react";
import { initialiseUserSession } from "./helpers/initialiseUserSession";
import OrderMessage from "./OrderMessage";
import { useAdminOrders } from "../../../hooks/useAdminOrders";
import { getOrders } from "../../../api/orders"

const OrderPage = () => {
    const {
        userId,
        adminMode,
        setAdminMode,
        products,
        setProducts,
        handleAddProduct,
        handleDeleteProduct,
        handleGenerateNewProducts,
        handleSelectProduct,
        handleUpdateProduct,
        productSelected,
        titleInputRef
    } = useAdminProducts()

    const {
        basketProducts,
        setBasketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
        decrementQuantityProduct,
        handleClearBasketProduct,
    } = useBasketProducts()

    const {
        setOrders,
        orderStatut,
        orders,
        tempOrder,
        handleCheckOrder,
        handleValidOrder,
        handleDenyOrder,
        handleArchiveOrder
    } = useAdminOrders()


    const orderContextValue = {
        userId,
        adminMode,
        setAdminMode,
        products,
        handleAddProduct,
        handleDeleteProduct,
        handleGenerateNewProducts,
        handleSelectProduct,
        handleUpdateProduct,
        productSelected,
        titleInputRef,
        basketProducts,
        setBasketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
        decrementQuantityProduct,
        handleClearBasketProduct,
        setOrders,
        orderStatut,
        orders,
        tempOrder,
        handleCheckOrder,
        handleValidOrder,
        handleDenyOrder,
        handleArchiveOrder
    }

    useEffect(() => {
        initialiseUserSession(userId, adminMode.isAdminMode, setProducts, setBasketProducts, setOrders)
    }, [])

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
        <OrderPageStyled>
            <div className={'order-container'}>
                <OrderContext.Provider value={orderContextValue}>
                    {orderStatut === "pending" && <OrderMessage />}
                    <Navbar />
                    <MainOrder />
                </OrderContext.Provider>
            </div>
        </OrderPageStyled>
    )
}

export default OrderPage

const OrderPageStyled = styled.div`
    height: 100vh;
    background: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;

    .order-container {
        width: 1400px;
        height: 95vh;
        display: flex;
        flex-direction: column;
        background: ${theme.colors.background_white};
        border-radius: ${theme.borderRadius.extraRound};
    }
`;