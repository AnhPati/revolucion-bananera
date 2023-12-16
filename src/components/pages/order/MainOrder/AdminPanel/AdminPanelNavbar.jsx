import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import styled from "styled-components"
import { theme } from "../../../../../theme"

const AdminPanelNavbar = ({ onClickDisplayTab, onClickMenuTabs, isOpen }) => {
    return (
        <AdminPanelNavbarStyled className='admin_panel-nav'>
            <ul>
                <li>
                    <button onClick={onClickDisplayTab} className={isOpen ? 'tab-control' : 'tab-control tab-active'}>
                        {isOpen ? <FiChevronDown /> : <FiChevronUp />}
                    </button>
                </li>
                <li>
                    <button onClick={onClickMenuTabs} className='tab-active' id={'tab-add'}>
                        <AiOutlinePlus />
                        <span className="nav-text">Ajouter un produit</span>
                    </button>
                </li>
                <li>
                    <button onClick={onClickMenuTabs} id={'tab-udpate'}>
                        <MdModeEditOutline />
                        <span className="nav-text">Modifier un produit</span>
                    </button>
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
            }
        }
    }
  
`;