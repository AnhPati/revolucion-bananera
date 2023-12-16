import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useState } from "react";
import AdminPanelNavbar from "./AdminPanelNavbar";

const AdminPanel = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleOpenPanel = () => {
        setIsOpen(!isOpen)
    }

    const handleActiveTab = (e) => {
        const tabs = document.querySelectorAll('.admin_panel-nav button')
        const panelTabs = [...tabs].filter(tab => !tab.classList.contains('tab-control'))
        const tabActive = e.currentTarget
        console.log(panelTabs)

        for (let tab of panelTabs) {
            if (tab.className === 'tab-active') {
                console.log("RESET")
                tab.className = ''
            }
        }

        tabActive.className = 'tab-active'
        !isOpen && handleOpenPanel()
    }

    return (
        <AdminPanelStyled>
            <AdminPanelNavbar
                onClickDisplayTab={handleOpenPanel}
                onClickMenuTabs={handleActiveTab}
                isOpen={isOpen}
            />
            <div className={isOpen ? 'admin_panel-body' : 'admin_panel-body closed'}>
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
        box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);

        &.closed {
            height: 0;
            padding: 0;
        }
    }
`;