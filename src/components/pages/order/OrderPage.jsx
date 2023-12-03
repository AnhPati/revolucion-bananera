import styled from "styled-components";
import Navbar from "../../navbar/Navbar"
import { theme } from "../../../theme";

const OrderPage = () => {

    return (
        <OrderPageStyled>
            <div className={'app-container'}>
                <Navbar />
                <main>
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
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
        background: ${theme.colors.background_white};

        main {
            flex: 1;
            border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
            box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;
        }
    }
`;