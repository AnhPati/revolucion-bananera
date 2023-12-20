import styled from "styled-components"
import { Tab } from "../../../../ui/Tab"
import { getAdminTabsConfig } from "./helpers/getAdminTabsConfig"

const AdminPanelNavbar = ({ onClickDisplayTab, onClickMenuTabs, isOpen, tabSelected }) => {

    const tabs = getAdminTabsConfig(isOpen, tabSelected, onClickDisplayTab, onClickMenuTabs)


    return (
        <AdminPanelNavbarStyled className='admin_panel-nav'>
            <ul>
                {tabs.map((tab) => {
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