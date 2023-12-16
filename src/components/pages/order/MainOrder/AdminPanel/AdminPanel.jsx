import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
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

        for (let tab of panelTabs) {
            if (tab.className === 'tab-active') {
                tab.className = ''
            }
        }

        tabActive.className = 'tab-active'
        !isOpen && handleOpenPanel()
    }

    return (
        <AdminPanelStyled>
            <AdminPanelNavbar />
            <nav className="admin_panel-nav">
                <ul>
                    <li>
                        <button onClick={handleOpenPanel} className={isOpen ? 'tab-control' : 'tab-control tab-active'}>
                            {isOpen ? <FiChevronDown /> : <FiChevronUp />}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleActiveTab} className='tab-active'>
                            <AiOutlinePlus />
                            <span className="nav-text">Ajouter un produit</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={handleActiveTab}>
                            <MdModeEditOutline />
                            <span className="nav-text">Modifier un produit</span>
                        </button>
                    </li>
                </ul>
            </nav>
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

    .admin_panel-nav {
        ul {
            display: flex;
            margin: 0;
            padding-left: 71px;
            list-style-type: none;

            li {
                button {
                    height: 45px;
                    padding: 10px 22px 11px 22px;
                    background-color: ${theme.colors.white};
                    font-family: 'Open Sans';
                    color: #93A2B1;
                    font-size: 14px;
                    border: 1px solid #E4E5E9;
                    border-radius: 5px 5px 0px 0px;
                    cursor: pointer;

                    svg {
                        width: 16px;
                        height: 16px;
                    }

                    .nav-text {
                        margin-left: 10px;
                        margin-right: 10px;
                        padding-bottom: 3.5px;
                    }

                    &:hover {
                        .nav-text {
                            border-bottom: #93A2B1 solid 2px;
                        }

                        &.tab-active {
                            .nav-text {
                                border-bottom: ${theme.colors.white} solid 2px;
                            }
                        }       
                    }

                    &.tab-active {
                        background-color: #000;
                        color: ${theme.colors.white};
                        border: #000;
                    }

                    &:disabled {
                        cursor: default;

                        &:hover {
                            .nav-text {
                                border-bottom: none;
                            }
                        }
                    }
                }
            }
        }
    }

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