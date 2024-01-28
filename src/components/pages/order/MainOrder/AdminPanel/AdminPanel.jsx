import styled from "styled-components";
import AdminPanelNavbar from "./AdminPanelNavbar";
import AdminPanelContent from "./AdminPanelContent";
import OrderContext from "../../../../../contexts/OrderContext";
import { useContext } from "react";

const AdminPanel = () => {
    const { adminMode } = useContext(OrderContext)
    const isOpen = adminMode.adminPanel.isOpen

    return (
        <AdminPanelStyled>
            <AdminPanelNavbar />
            {isOpen && <AdminPanelContent />}
        </AdminPanelStyled>
    )
}

export default AdminPanel

const AdminPanelStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
`