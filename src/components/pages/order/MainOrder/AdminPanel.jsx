import styled from "styled-components";
import { theme } from "../../../../theme";

const AdminPanel = () => {
    return (
        <AdminPanelStyled>AdminPanel</AdminPanelStyled>
    )
}

export default AdminPanel

const AdminPanelStyled = styled.div`
    position: fixed;
    bottom: 25px;
    width: 1400px;
    padding: 17px;
    background-color: ${theme.colors.white};
    color: #000;
    border-radius: 0 0 0 15px;
`;