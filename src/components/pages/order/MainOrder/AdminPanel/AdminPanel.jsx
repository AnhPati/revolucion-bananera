import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useState } from "react";
import AdminPanelNavbar from "./AdminPanelNavbar";
import AdminPanelContent from "./AdminPanelContent";

const AdminPanel = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [panelContent, setPanelContent] = useState('add')

    const handleOpenPanel = () => {
        setIsOpen(!isOpen)
    }

    const handleActiveTab = (e) => {
        const tabs = document.querySelectorAll('.admin_panel-nav button')
        const panelTabs = [...tabs].filter(tab => !tab.classList.contains('tab-control'))
        const tabActive = e.currentTarget
        const tabActiveType = tabActive.id.slice(tabActive.id.indexOf('-') + 1)

        for (let tab of panelTabs) {
            if (tab.className === 'tab-active') {
                tab.className = ''
            }
        }

        tabActive.className = 'tab-active'
        setPanelContent(tabActiveType)
        !isOpen && handleOpenPanel()
    }

    return (
        <AdminPanelStyled>
            <AdminPanelNavbar
                onClickDisplayTab={handleOpenPanel}
                onClickMenuTabs={handleActiveTab}
                isOpen={isOpen}
            />
            <AdminPanelContent
                content={panelContent}
                isOpen={isOpen}
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