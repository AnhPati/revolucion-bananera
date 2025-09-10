import styled from "styled-components";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../contexts/OrderContext";
import { getAdminTabsConfig, getCurrentTabSelected } from "./helpers/getAdminTabsConfig";
import { useContext } from "react";
import { EMPTY_PRODUCT } from "../../../../../constants/product";

const AdminPanelContent = () => {
    const { adminMode, productSelected } = useContext(OrderContext)
    const tabSelected = adminMode.adminPanel.tabSelected

    const isCardSelected = productSelected !== EMPTY_PRODUCT
    const tabs = getAdminTabsConfig({ isCardSelected: isCardSelected }).slice(1)
    const currentTabSelected = getCurrentTabSelected(tabs, tabSelected)

    return (
        <AdminPanelContentStyled>
            {currentTabSelected.Content}
        </AdminPanelContentStyled>
    )
}

export default AdminPanelContent

const AdminPanelContentStyled = styled.div`
    height: 250px;
    padding-top: 31px;
    padding-left: 71px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.dark};
    box-shadow: ${theme.shadows.subtle};
`