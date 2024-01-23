import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../contexts/OrderContext";
import { getAdminTabsConfig, getCurrentTabSelected } from "./helpers/getAdminTabsConfig";
import { useContext } from "react";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

const AdminPanelContent = () => {
    const { adminMode, productSelected } = useContext(OrderContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const isCardSelected = productSelected !== EMPTY_PRODUCT
    const tabs = getAdminTabsConfig({ isCardSelected: isCardSelected }).slice(1)
    const currentTabSelected = getCurrentTabSelected(tabs, tabSelected)

    return (
        <AdminPanelContentStyled className={isOpen ? '' : 'closed'}>
            {currentTabSelected.Content}
        </AdminPanelContentStyled>
    )
}

export default AdminPanelContent

const AdminPanelContentStyled = styled.div`
    width: 100%;
    height: 250px;
    padding-top: 31px;
    padding-left: 71px;
    background-color: ${theme.colors.white};
    color: #000;
    box-shadow: ${theme.shadows.subtle};

    &.closed {
        height: 0;
        padding: 0;
        overflow: hidden;
    }
`