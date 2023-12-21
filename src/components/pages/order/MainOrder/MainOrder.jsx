import styled from "styled-components";
import { theme } from "../../../../theme";
import { MenuOrder } from "./MenuOrder";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import AdminContext from "../../../../contexts/AdminContext";

export const MainOrder = () => {
    const { adminMode } = useContext(AdminContext)
    const isAdminMode = adminMode.isAdminMode

    return (
        <MainOrderStyled>
            <MenuOrder />
            {isAdminMode && <AdminPanel />}
        </MainOrderStyled>
    )
}

const MainOrderStyled = styled.main`
    flex: 1;
    display: flex;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};    
    overflow-y: scroll;
`