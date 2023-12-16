import styled from "styled-components";
import { theme } from "../../../../../theme";

const AdminPanelContent = ({ content, isOpen }) => {
    return (
        <AdminPanelContentStyled className={isOpen ? '' : 'closed'}>
            {content === 'add' ? 'Ajouter un produit' : 'Modifier un produit'}
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