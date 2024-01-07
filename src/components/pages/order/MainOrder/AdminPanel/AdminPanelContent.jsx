import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminContext from "../../../../../contexts/AdminContext";
import { getAdminTabsConfig, getCurrentTabSelected } from "./helpers/getAdminTabsConfig";
import AddProductForm from "./AddProductForm";
import { useContext } from "react";
import UpdateProductForm from "./UpdateProductForm";

const AdminPanelContent = () => {
    const { adminMode } = useContext(AdminContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const tabs = getAdminTabsConfig().slice(1)
    const currentTabSelected = getCurrentTabSelected(tabs, tabSelected)

    return (
        <AdminPanelContentStyled className={isOpen ? '' : 'closed'}>
            {currentTabSelected.id === 'tab-add' ? (
                <AddProductForm />
            ) : currentTabSelected.id === 'tab-update' ? (
                <UpdateProductForm />
            ) : (
                <>
                    {currentTabSelected.label}
                </>
            )}
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