import styled from "styled-components";
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme";
import { MainOrder } from "./MainOrder/MainOrder";
import OrderContext from "../../../contexts/OrderContext";
import { useAdminProducts } from "../../../hooks/useAdminProducts";
import { useBasketProducts } from "../../../hooks/useBasketProducts";

const OrderPage = () => {
    const {
        adminMode,
        setAdminMode,
        products,
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
        handleAddBasketProduct,
        handleDeleteBasketProduct
    } = useBasketProducts()


    const orderContextValue = {
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
    padding-top: 24.5px;
    padding-bottom: 24.5px;

    .order-container {
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
        background: ${theme.colors.background_white};
    }
`;