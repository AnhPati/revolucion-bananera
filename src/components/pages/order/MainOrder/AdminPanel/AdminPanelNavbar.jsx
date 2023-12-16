import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import styled from "styled-components"
import { AdminPanelNavbarButton } from "./AdminPanelNavbarButton"

const AdminPanelNavbar = ({ onClickDisplayTab, onClickMenuTabs, isOpen }) => {
    return (
        <AdminPanelNavbarStyled className='admin_panel-nav'>
            <ul>
                <AdminPanelNavbarButton
                    onClick={onClickDisplayTab}
                    className={isOpen ? 'tab-control' : 'tab-control tab-active'}
                    Icon={isOpen ? <FiChevronDown /> : <FiChevronUp />}
                />
                <AdminPanelNavbarButton
                    onClick={onClickMenuTabs}
                    className='tab-active'
                    id={'tab-add'}
                    Icon={<AiOutlinePlus />}
                    label={'Ajouter un produit'}
                />
                <AdminPanelNavbarButton
                    onClick={onClickMenuTabs}
                    id={'tab-update'}
                    Icon={<MdModeEditOutline />}
                    label={'Modifier un produit'}
                />
            </ul>
        </AdminPanelNavbarStyled>
    )
}

export default AdminPanelNavbar

const AdminPanelNavbarStyled = styled.nav`
    ul {
        display: flex;
        margin: 0;
        padding-left: 71px;
        list-style-type: none;
    }
  
`;