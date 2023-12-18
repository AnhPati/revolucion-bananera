import styled from "styled-components";
import { useContext } from "react";
import AdminPanelNavbar from "./AdminPanelNavbar";
import AdminPanelContent from "./AdminPanelContent";
import AdminContext from "../../../../../contexts/AdminContext";

const AdminPanel = () => {
    const { adminMode, setAdminMode } = useContext(AdminContext)
    const isOpen = adminMode.adminPanel.isOpen
    const tabSelected = adminMode.adminPanel.tabSelected

    const handleOpenPanel = () => {
        const newAdminMode = { ...adminMode }
        newAdminMode.adminPanel.isOpen = !isOpen

        setAdminMode(newAdminMode)
    }

    const handleActiveTab = (e) => {
        const tabs = document.querySelectorAll('.admin_panel-nav button')
        const panelTabs = [...tabs].filter(tab => !tab.classList.contains('tab-control'))
        const tabActive = e.currentTarget
        const tabActiveType = tabActive.id.slice(tabActive.id.indexOf('-') + 1)
        const newAdminMode = { ...adminMode }
        newAdminMode.adminPanel.tabSelected = tabActiveType
        console.log("Tab active : " + newAdminMode.adminPanel.tabSelected)

        for (let tab of panelTabs) {
            if (tab.className === 'tab-active') {
                tab.className = ''
            }
        }

        tabActive.className = 'tab-active'
        setAdminMode(newAdminMode)
        !isOpen && handleOpenPanel()
    }

    return (
        <AdminPanelStyled>
            <AdminPanelNavbar
                onClickDisplayTab={handleOpenPanel}
                onClickMenuTabs={handleActiveTab}
                isOpen={isOpen}
                tabSelected={tabSelected}
            />
            <AdminPanelContent
                isOpen={isOpen}
                content={tabSelected}
            />


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
`