import { css } from "styled-components";

export const AdminPanelAnimation = css`
    &.admin_panel-animation-appear {
        transform: translateY(250px);
        opacity: 0%;
    }

    &.admin_panel-animation-appear-active {    
        transform: translateY(0);
        transition: 0.5s;
        opacity: 100%;
    }
`;

export const ImgPreviewAnimation = css`
    &.img_preview-animation-appear {
        opacity: 0%;
    }

    &.img_preview-animation-appear-active {
        transition: 1s;
        opacity: 100%;
    }

    &.img_preview-animation-enter {
        opacity: 0%;
    }

    &.img_preview-animation-enter-active {
        transition: 1s;
        opacity: 100%;
    }

    &.img_preview-animation-exit {
        opacity: 100%;
    }

    &.img_preview-animation-exit-active {
        opacity: 0%;
    }
`;

export const BasketProductAnimation = css`
    .basket_product-animation-appear {
        transform: translateX(100px);
        opacity: 0%;
    }

    .basket_product-animation-appear-active {    
        transform: translateX(0);
        transition: 0.5s;
        opacity: 100%;
    }

    .basket_product-animation-enter {
        transform: translateX(100px);
        opacity: 0%;
    }

    .basket_product-animation-enter-active {    
        transform: translateX(0);
        transition: 0.5s;
        opacity: 100%;
    }

    .basket_product-animation-exit {    
        transform: translateX(0);     
        opacity: 100%;
    }

    .basket_product-animation-exit-active {  
        transform: translateX(-100px);
        opacity: 0%;  
        transition: 0.5s;
    }
`;