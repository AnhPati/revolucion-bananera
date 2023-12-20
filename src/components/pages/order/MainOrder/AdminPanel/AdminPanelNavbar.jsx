import styled from "styled-components"
import { Tab } from "../../../../ui/Tab"
import { getAdminTabsConfig } from "./helpers/getAdminTabsConfig"
import { useContext } from "react"
import AdminContext from "../../../../../contexts/AdminContext"

const AdminPanelNavbar = () => {
    const { adminMode, setAdminMode } = useContext(AdminContext)
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


    const tabs = getAdminTabsConfig(isOpen, tabSelected, handleOpenPanel, handleActiveTab)

    return (
        <AdminPanelNavbarStyled className='admin_panel-nav'>
            <ul>
                {tabs.map((tab) => {
                    return (
                        <li key={tab.id}>
                            <Tab
                                className={tab.className && tab.className}
                                onClick={tab.onClick}
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