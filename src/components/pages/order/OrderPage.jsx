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
        orderStatut,
        orders,
        tempOrder,
        handleCheckOrder,
        handleValidOrder,
        handleDenyOrder,
        handleDeleteOrder
    } = useBasketProducts()


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
        orderStatut,
        orders,
        tempOrder,
        handleCheckOrder,
        handleValidOrder,
        handleDenyOrder,
        handleDeleteOrder
    }

    useEffect(() => {
        initialiseUserSession(userId, setProducts, setBasketProducts)
    }, [])


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