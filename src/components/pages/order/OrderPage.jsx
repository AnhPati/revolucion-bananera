import styled from "styled-components";
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme";
import { MainOrder } from "./MainOrder/MainOrder";
import { useState } from "react";
import AdminContext from "../../../contexts/AdminContext";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

const OrderPage = () => {
    const [products, setProducts] = useState(fakeMenu2)
    const [adminMode, setAdminMode] = useState({
        isAdminMode: false,
        adminPanel: {
            isOpen: true,
            tabSelected: 'tab-add'
        },
        setAdminMode: () => { }
    })

    const handleAddProduct = (newProduct) => {
        const newProducts = [...products]

        setProducts([newProduct, ...newProducts])
    }

    const handleDeleteProduct = (id) => {
        const newProducts = products.filter(product => product.id.toString() !== id.toString())

        setProducts(newProducts)
    }

    const handleGenerateNewProducts = () => {
        console.log(fakeMenu2)
        setProducts(fakeMenu2)
    }

    const adminContextValue = {
        adminMode,
        setAdminMode,
        products,
        handleAddProduct,
        handleDeleteProduct,
        handleGenerateNewProducts
    }

    return (
        <OrderPageStyled>
            <div className={'order-container'}>
                <AdminContext.Provider value={adminContextValue}>
                    <Navbar />
                    <MainOrder />
                </AdminContext.Provider>
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