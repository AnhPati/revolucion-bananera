import styled from "styled-components";
import AdminPanelNavbar from "./AdminPanelNavbar";
import AdminPanelContent from "./AdminPanelContent";
import OrderContext from "../../../../../contexts/OrderContext";
import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AdminPanel = () => {
    const { adminMode } = useContext(OrderContext)
    const isOpen = adminMode.adminPanel.isOpen

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={'admin-panel'}
                appear={true}
                classNames={'admin-panel'}
                timeout={500}
            >
                <AdminPanelStyled>
                    <AdminPanelNavbar />
                    {isOpen && <AdminPanelContent />}
                </AdminPanelStyled>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AdminPanel

const AdminPanelStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;

    &.admin-panel-appear {
        transform: translateY(250px);
        opacity: 0%;
    }

    &.admin-panel-appear-active {    
        transform: translateY(0);
        transition: 0.5s;
        opacity: 100%;
    }
`