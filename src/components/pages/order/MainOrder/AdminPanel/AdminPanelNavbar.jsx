import styled from "styled-components"
import { Tab } from "../../../../ui/Tab"
import { getAdminTabsConfig } from "./helpers/getAdminTabsConfig"
import { useContext } from "react"
import OrderContext from "../../../../../contexts/OrderContext"

const AdminPanelNavbar = () => {
    const { adminMode, setAdminMode } = useContext(OrderContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const handleOpenPanel = () => {
        const newAdminMode = { ...adminMode }
        newAdminMode.adminPanel.isOpen = !isOpen

        setAdminMode(newAdminMode)
    }

    const handleActiveTab = (e) => {
        const tabSelected = e.currentTarget.id

        setAdminMode(prevAdminMode => ({
            ...prevAdminMode,
            adminPanel: {
                isOpen: true,
                tabSelected: tabSelected
            }
        }))
    }

    const tabs = getAdminTabsConfig({ isOpen: isOpen, onClickOpenPanel: handleOpenPanel, onClickSelectTab: handleActiveTab })

    return (
        <AdminPanelNavbarStyled className='admin_panel-nav'>
            <ul>
                {tabs.map((tab) => {
                    return (
                        <li key={tab.id}>
                            <Tab
                                id={tab.id && tab.id}
                                label={tab.label && tab.label}
                                className={tab.className ? tab.className : tabSelected === tab.id ? 'tab-active' : ''}
                                Icon={tab.Icon}
                                onClick={tab.onClick}
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
    width: max-content;
    position: relative;

    ul {
        position: absolute;
        top: -45px;
        display: flex;
        margin: 0 0 0 71px;
        padding: 0;
        list-style-type: none;

        button {
            margin-left: 1px;
        }
    }
`;