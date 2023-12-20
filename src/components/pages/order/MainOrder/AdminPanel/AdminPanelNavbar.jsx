import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import styled from "styled-components"
import { Tab } from "../../../../ui/Tab"

const AdminPanelNavbar = ({ onClickDisplayTab, onClickMenuTabs, isOpen, tabSelected }) => {
    return (
        <AdminPanelNavbarStyled className='admin_panel-nav'>
            <ul>
                <li>
                    <Tab
                        onClick={onClickDisplayTab}
                        className={isOpen ? 'tab-control' : 'tab-control tab-active'}
                        Icon={isOpen ? <FiChevronDown /> : <FiChevronUp />}
                    />
                </li>
                <li>
                    <Tab
                        onClick={onClickMenuTabs}
                        tabSelected={tabSelected}
                        id={'tab-add'}
                        Icon={<AiOutlinePlus />}
                        label={'Ajouter un produit'}
                    />
                </li>
                <li>
                    <Tab
                        onClick={onClickMenuTabs}
                        tabSelected={tabSelected}
                        id={'tab-update'}
                        Icon={<MdModeEditOutline />}
                        label={'Modifier un produit'}
                    />
                </li>
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

        button {
            margin-left: 1px;
        }
    }
`;