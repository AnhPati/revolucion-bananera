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
    position: fixed;
    bottom: 24px;
    width: 1400px;
    border-radius: 0 0 0 15px;
    overflow: hidden;
`