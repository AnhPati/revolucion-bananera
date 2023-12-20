import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import styled from "styled-components"
import { Tab } from "../../../../ui/Tab"

const AdminPanelNavbar = ({ onClickDisplayTab, onClickMenuTabs, isOpen, tabSelected }) => {

    const adminTabsConfig = [
        {
            className: isOpen ? 'tab-control' : 'tab-control tab-active',
            Icon: isOpen ? <FiChevronDown /> : <FiChevronUp />,
            onClick: onClickDisplayTab
        },
        {
            id: 'tab-add',
            label: 'Ajouter un produit',
            Icon: <AiOutlinePlus />,
            onClick: onClickMenuTabs,
            tabSelected: tabSelected
        },
        {
            id: 'tab-update',
            label: 'Modifier un produit',
            Icon: <MdModeEditOutline />,
            onClick: onClickMenuTabs,
            tabSelected: tabSelected
        }
    ]

    return (
        <AdminPanelNavbarStyled className='admin_panel-nav'>
            <ul>
                {adminTabsConfig.map((tab) => {
                    return (
                        <li key={tab.id}>
                            <Tab
                                className={tab.className && tab.className}
                                onClick={tab.onClick}
                                tabSelected={tab.tabSelected && tab.tabSelected}
                                id={tab.id && tab.id}
                                Icon={tab.Icon}
                                label={tab.label && tab.label}
                            />
                        </li>
                    )
                })}
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