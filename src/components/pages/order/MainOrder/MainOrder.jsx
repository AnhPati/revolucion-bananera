import styled from "styled-components";
import { theme } from "../../../../theme";
import { MenuOrder } from "./MenuOrder";
import AdminPanel from "./AdminPanel";

export const MainOrder = () => {
    return (
        <MainOrderStyled>
            <MenuOrder />
            <AdminPanel />
        </MainOrderStyled>
    )
}

const MainOrderStyled = styled.main`
    flex: 1;
    display: flex;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;    
    overflow-y: scroll;
`