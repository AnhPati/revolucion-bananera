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

export const ImgPreviewAnimation = css`
    &.img-preview-appear {
    opacity: 0%;
    }

    &.img-preview-appear-active {
    transition: 1s;
    opacity: 100%;
    }

    &.img-preview-enter {
    opacity: 0%;
    }

    &.img-preview-enter-active {
    transition: 1s;
    opacity: 100%;
    }

    &.img-preview-exit {
    opacity: 100%;
    }

    &.img-preview-exit-active {
    opacity: 0%;
    }
`;