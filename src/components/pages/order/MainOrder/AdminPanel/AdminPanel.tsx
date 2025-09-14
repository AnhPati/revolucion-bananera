import styled from "styled-components";
import AdminPanelNavbar from "./AdminPanelNavbar";
import AdminPanelContent from "./AdminPanelContent";
import { useOrderContext } from "@/contexts/OrderContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AdminPanelAnimation } from "@/theme/animations";

const AdminPanel = () => {
    const { adminMode } = useOrderContext()
    const isOpen = adminMode.adminPanel.isOpen

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={'admin-panel'}
                appear={true}
                classNames={'admin_panel-animation'}
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

    ${AdminPanelAnimation}
`