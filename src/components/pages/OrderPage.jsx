import styled from "styled-components";
import Navbar from "./navbar/Navbar"
import { theme } from "../../theme";

const OrderPage = () => {

    return (
        <OrderPageStyled>
            <div className={'app-container'}>
                <Navbar />
                <main>
                    Main page
                </main>
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

    .app-container {
        width: 1400px;
        background: ${theme.colors.white};
        border-radius: ${theme.borderRadius.extraRound};
    }
`;