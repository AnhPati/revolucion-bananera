import styled from "styled-components";
import Navbar from "./Navbar/Navbar"
import { theme } from "../../../theme";
import { MainOrder } from "./MainOrder/MainOrder";
import { useState } from "react";
import AdminContext from "../../../contexts/AdminContext";

const OrderPage = () => {
    const [adminMode, setAdminMode] = useState({
        isAdminMode: false,
        adminPanel: {
            isOpen: true,
            tabSelected: 'add'
        },
        setAdminMode: () => { }
    })

    const adminContextValue = {
        adminMode,
        setAdminMode
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