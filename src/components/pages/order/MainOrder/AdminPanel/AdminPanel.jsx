import styled from "styled-components";
import AdminPanelNavbar from "./AdminPanelNavbar";
import AdminPanelContent from "./AdminPanelContent";

const AdminPanel = () => {
    return (
        <AdminPanelStyled>
            <AdminPanelNavbar />
            <AdminPanelContent />
        </AdminPanelStyled>
    )
}

export default AdminPanel

const AdminPanelStyled = styled.div`
    position: sticky;
    bottom: -1px;
    overflow: hidden;
`