import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../../contexts/AdminContext";
import { getAdminTabsConfig, getCurrentTabSelected } from "./helpers/getAdminTabsConfig";

const AdminPanelContent = () => {
    const { adminMode } = useContext(AdminContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const tabs = getAdminTabsConfig().slice(1)
    const currentTabSelected = getCurrentTabSelected(tabs, tabSelected)

    return (
        <AdminPanelContentStyled className={isOpen ? '' : 'closed'}>
            {tabSelected === currentTabSelected.id && currentTabSelected.label}
        </AdminPanelContentStyled>
    )
}

export default AdminPanelContent

const AdminPanelContentStyled = styled.div`
    width: 100%;
    height: 250px;
    padding: 17px;
    background-color: ${theme.colors.white};
    color: #000;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);

    &.closed {
        height: 0;
        padding: 0;
    }
`