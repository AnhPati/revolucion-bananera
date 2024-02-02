import styled from "styled-components";
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme";
import { MainOrder } from "./MainOrder/MainOrder";
import OrderContext from "../../../contexts/OrderContext";
import { useAdminProducts } from "../../../hooks/useAdminProducts";
import { useBasketProducts } from "../../../hooks/useBasketProducts";
import { useEffect } from "react";

const OrderPage = () => {
    const {
        userId,
        adminMode,
        setAdminMode,
        products,
        handleAddProduct,
        handleDeleteProduct,
        handleGenerateNewProducts,
        handleSelectProduct,
        handleUpdateProduct,
        initialiseUserProducts,
        productSelected,
        titleInputRef
    } = useAdminProducts()

    const {
        basketProducts,
        handleAddBasketProduct,
        handleDeleteBasketProduct,
        initialiseUserBasketProducts
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
        handleAddBasketProduct,
        handleDeleteBasketProduct
    }

    const initialiseUserSession = async () => {
        await initialiseUserProducts()
        initialiseUserBasketProducts(userId)
    }

    useEffect(() => {
        initialiseUserSession()
    }, [])


    return (
        <OrderPageStyled>
            <div className={'order-container'}>
                <OrderContext.Provider value={orderContextValue}>
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