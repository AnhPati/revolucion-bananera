import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

const AdminPanel = () => {
    return (
        <AdminPanelStyled>
            <nav className="admin_panel-nav">
                <ul>
                    <li>
                        <FiChevronUp />
                    </li>
                    <li>
                        <AiOutlinePlus /> Ajouter un produit
                    </li>
                    <li>
                        <MdModeEditOutline /> Modifier un produit
                    </li>
                </ul>
            </nav>
            <div className="admin_panel-body">
                Ajouter un produit
            </div>

        </AdminPanelStyled>
    )
}

export default AdminPanel

const AdminPanelStyled = styled.div`
    position: fixed;
    bottom: 25px;
    width: 1400px;
    border-radius: 0 0 0 15px;
    overflow: hidden;

    .admin_panel-body {
        width: 100%;
        height: 250px;
        padding: 17px;
        background-color: ${theme.colors.white};
        color: #000;
    }
`;