import { css } from "styled-components";

export const AdminPanelAnimation = css`
    &.admin-panel-appear {
        transform: translateY(250px);
        opacity: 0%;
    }

    &.admin-panel-appear-active {    
        transform: translateY(0);
        transition: 0.5s;
        opacity: 100%;
    }
`;